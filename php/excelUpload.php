<?php
    error_reporting(E_ALL);
    ini_set("display_errors","1");

    require('dbConnect_admin.php');

?>

<?php

    $jsonData= file_get_contents("php://input");

    $bizArray = json_decode($jsonData,true);

    print_r($bizArray);
// count($bizArray);
    for($i=1; $i<count($bizArray); $i++){
      
        $biz = $bizArray[$i];
        $menuName = $biz['biz_menuName'];
        //get menu id

        $getMenu= $pdo->prepare("SELECT menu_id FROM tb_menu WHERE menu_name = :menuName");
        $getMenu->bindParam(":menuName",$menuName,PDO::PARAM_STR);
        $getMenu->execute();
        $menuId = $getMenu->fetch()['menu_id'];

        $biz['menu_id'] = $menuId;

        unset($biz['biz_menuName']);
        unset($biz['biz_imageList']);

        print_r($biz);

            if($biz['menu_id']!=''){
                $uploadQuery = "INSERT INTO tb_biz_level1 (";
 
                foreach($biz as $key=>$value){
                    $uploadQuery = $uploadQuery . "$key" . ",";
                }
                $uploadQuery =  rtrim($uploadQuery,',');
                $uploadQuery = $uploadQuery . ") VALUES(";
        
                foreach($biz as $key=>$value){
                    $uploadQuery = $uploadQuery . ":" . "$key" . ",";
                }
                $uploadQuery =  rtrim($uploadQuery,',');
                $uploadQuery = $uploadQuery . ")";
                echo $uploadQuery;
                $uploadReq = $pdo->prepare($uploadQuery);
        
                foreach($biz as $key=>$value){
                    $uploadReq->bindValue(":" . "$key", $value, PDO::PARAM_STR);
                }
        
                $uploadReq->execute();
            }

           

            // print_r($uploadReq);
        
    }

    // print_r(json_decode($jsonData,true));
?>