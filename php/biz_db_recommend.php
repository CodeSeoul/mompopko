<?php
//error_reporting(E_ALL);
ini_set('display_errors', 1);  

require_once("dbConnect.php");

if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['menuId'])){

    $menuId = $_POST['menuId'];

    // get sub menu 1's menu_id and current menu level from menuId
    $menuReq= $pdo->query("SELECT upper_menu_id, menu_level FROM tb_menu WHERE menu_id = $menuId");
    $menu = $menuReq->fetch();
    $upperMenuId = $menu['upper_menu_id'];
    $menuLevel = $menu['menu_level'];

    // get main menu's menu_id
    if($menuLevel==3){
        $mainMenuReq = $pdo->query("SELECT upper_menu_id FROM tb_menu WHERE menu_id = $upperMenuId");
        $mainMenuId = $mainMenuReq->fetch()['upper_menu_id'];
    }else if($menuLevel==2){
        $mainMenuId = $upperMenuId;
    }

    // get all menu_id under the same main menu

    $subMenusReq = $pdo->query("SELECT menu_id FROM tb_menu WHERE upper_menu_id = $mainMenuId");
    $subMenus = $subMenusReq->fetchAll();
    $allMenus = [];
    
    foreach($subMenus as $subMenu){
        $subMenuId = $subMenu['menu_id'];
        $subMenu2Req = $pdo->query("SELECT menu_id FROM tb_menu WHERE upper_menu_id = $subMenuId");
        $subMenu2s = $subMenu2Req->fetchAll();
        foreach($subMenu2s as $subMenu2){
            $allMenus[] = (int)$subMenu2['menu_id'];
        }
    }

    // get recommended posts
    // recommendation method : pick 3 businesses with 1) most view counts 2) latest upload date 3) random in the same main cat

    $rcmdPosts = [];

    // most view counts

    $mostViewQuery = 'SELECT * FROM tb_biz LEFT JOIN tb_file ON tb_biz.file_grp_id = tb_file.file_grp_id WHERE tb_file.file_order=1 AND menu_id IN (' . implode(',', $allMenus) . ') ORDER BY biz_view_cnt DESC LIMIT 0,3';

    $mostViewReq = $pdo->query($mostViewQuery);
    $mostViewBiz = $mostViewReq->fetch();

    $rcmdPosts['mostViews'] = $mostViewBiz;

    // latest upload date

    $lastUploadQuery = 'SELECT * FROM tb_biz LEFT JOIN tb_file ON tb_biz.file_grp_id = tb_file.file_grp_id WHERE tb_file.file_order=1 AND menu_id IN (' . implode(',', $allMenus) . ') ORDER BY tb_biz.frst_input_date LIMIT 0,3';
    $lastUploadReq = $pdo->query($lastUploadQuery);
    $lastUploadBiz = $lastUploadReq->fetch();

    $rcmdPosts['lastUpload'] = $lastUploadBiz;

    // select random

    $randQuery = 'SELECT * FROM tb_biz LEFT JOIN tb_file ON tb_biz.file_grp_id = tb_file.file_grp_id WHERE tb_file.file_order=1 AND menu_id IN (' . implode(',', $allMenus) . ') ORDER BY RAND() LIMIT 1';
    $randReq = $pdo->query($randQuery);
    $randBiz = $randReq->fetch();

    $rcmdPosts['rand'] = $randBiz;

    //if the same posts are recommended replace it with a random one.
    //  OR
    // $rcmdPosts['lastUpload']['biz_id']==$rcmdPosts['rand']['biz_id']
    // $rcmdPosts['mostView']['biz_id']==$rcmdPosts['rand']['biz_id'] OR

    if($rcmdPosts['mostViews']['biz_id']==$rcmdPosts['lastUpload']['biz_id']){
        $rcmdPosts['lastUpload'] = $lastUploadReq->fetch();
    }
    while($rcmdPosts['mostViews']['biz_id']==$rcmdPosts['rand']['biz_id']
    OR $rcmdPosts['lastUpload']['biz_id']==$rcmdPosts['rand']['biz_id']){
        $randReq = $pdo->query($randQuery);
        $randBiz = $randReq->fetch();
        $rcmdPosts['rand'] = $randBiz;
    }
    print_r(json_encode($rcmdPosts));
}

?>