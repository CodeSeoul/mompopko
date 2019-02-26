<?php 
    try
{
    $host = 'mompopkoapi.wcoding.com';
    $user = 'mompopko_admin';
    $password = 'windMarshall92Adult';
    $port = '8833';
    $dbname = 'mompopko';

    $dsn = 'mysql:host='. $host . ';port=' . $port . ';dbname=' . $dbname;

    $pdo = new PDO($dsn, $user, $password);
    $query = "SELECT 
    A.biz_id
    ,A.biz_name
    ,C.menu_id
    ,C.upper_menu_id
    ,C.menu_name
    ,CONCAT(fn_menu_parents(C.menu_id), ' > ', C.menu_name) AS menu_navi
    ,fn_menu_parents(C.menu_id) AS menu_parents
    ,group_concat(concat(B.file_path,B.file_logic_name) separator ',') AS image_files
    ,date_format(A.biz_open_date, \"%M %Y\") AS biz_open_date
    ,date_format(A.biz_interview_date, \"%M, %D, %Y\") AS biz_interview_date
    ,A.biz_level
    ,A.biz_view_cnt
    ,A.biz_close_date
    ,A.biz_address
    ,A.biz_province
    ,A.biz_city
    ,A.biz_district
    ,A.biz_neighborhood
    ,A.biz_zipcode
    ,A.biz_tel
    ,A.biz_email
    ,A.biz_open_hour
    ,A.biz_interview_conts
    ,A.biz_website
    ,A.biz_facebook
    ,A.biz_instagram
    ,A.biz_youtube
    ,A.biz_twitter
    ,A.frst_input_date
    ,A.last_update_date
    ,A.biz_owner
    ,A.biz_popular_item
    ,A.biz_recommended
FROM mompopko.tb_biz A	
INNER JOIN mompopko.tb_file B
ON A.file_grp_id = B.file_grp_id
INNER JOIN mompopko.tb_menu C
ON A.menu_id = C.menu_id
GROUP BY B.file_grp_id
ORDER BY A.biz_id";

    $req = $pdo->prepare($query);
    $biz_name = $_GET['biz_name'];
    $req->execute(array(
    ':biz_name' => $biz_name
    ));$req->execute();
    $result = $req -> fetch();

    $menu_navi = $result['menu_navi'];
    $image_files = $result['image_files'];
    $menu_name = $result['menu_name'];
    $menu_id = $result['menu_id'];
    $upper_menu_id = $result['upper_menu_id'];
    $real_biz_name =$result['biz_name'];
    $biz_level = $result['biz_level'];
    $biz_view_cnt = $result['biz_view_cnt'];
    $biz_owner = $result['biz_owner'];
    $biz_open_date = $result['biz_open_date'];
    $biz_close_date = $result['biz_close_date'];
    $biz_address = $result['biz_address'];
    $biz_province = $result['biz_province'];
    $biz_city = $result['biz_city'];
    $biz_district = $result['biz_district'];
    $biz_neighborhood = $result['biz_neighborhood'];
    $biz_zipcode = $result['biz_zipcode'];
    $biz_tel = $result['biz_tel'];
    $biz_email = $result['biz_email'];
    $biz_open_hour = $result['biz_open_hour'];
    $biz_interview_conts = $result['biz_interview_conts'];
    $biz_interview_date = $result['biz_interview_date'];
    $biz_website = $result['biz_website'];
    $biz_facebook = $result['biz_facebook'];
    $biz_instagram = $result['biz_instagram'];
    $biz_youtube = $result['biz_youtube'];
    $biz_twitter = $result['biz_twitter'];
    $frst_input_date = $result['frst_input_date'];
    $last_update_date = $result['last_update_date'];
    $biz_popular_item = $result['biz_popular_item']; 
    $biz_recommended = $result['biz_recommended'];
}
    catch (Exception $e)
{
    die('Error: '. $e->getMessage());
}