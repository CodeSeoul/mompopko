<?php
    error_reporting(E_ALL);
    ini_set("display_errors","1");

    require('dbConnect_admin.php');

?>

<?php

    $jsonData= file_get_contents("php://input");

    $bizArray = json_decode($jsonData,true);

    for($i=1; $i<count($bizArray); $i++){

        //update tb_file

        $maxFidQuery = "SELECT MAX(file_grp_id) AS maxFid FROM tb_file";
        $maxFidReq = $pdo->prepare($maxFidQuery);
        $maxFidReq->execute();
        $maxFid =(int)($maxFidReq->fetch()['maxFid'])+1;

        $imgList = $bizArray[$i]['biz_imageList'];
        
        $imgList = trim($imgList,"[]");
        $imgList = explode(',',$imgList);
        echo "maxFid : $maxFid <br/>";
        foreach($imgList as $key=>$img){
            if($img!=''){
                $tbFileQuery = "INSERT INTO tb_file (file_grp_id, file_id, file_order, file_logic_name, file_physic_name, file_path, file_extension)
                VALUES(:file_grp_id, :file_id, :file_order, :file_logic_name, :file_physic_name, :file_path, :file_extension)";
    
                $fileName = substr(strrchr($img,"/"),1);
                $fileExtension = strtolower(substr(strrchr($fileName,'.'),1));
                $fileOrder = $key+1;
                echo $fileName;
    
                $tbFileReq = $pdo->prepare($tbFileQuery);
                $tbFileReq->bindValue(":file_grp_id",$maxFid,PDO::PARAM_INT);
                $tbFileReq->bindValue(":file_id",$key,PDO::PARAM_INT);
                $tbFileReq->bindValue(":file_order",$fileOrder,PDO::PARAM_INT);
                $tbFileReq->bindValue(":file_logic_name",$fileName,PDO::PARAM_STR);
                $tbFileReq->bindValue(":file_physic_name",$fileName,PDO::PARAM_STR);
                $tbFileReq->bindValue(":file_path",trim($img),PDO::PARAM_STR);
                $tbFileReq->bindValue(":file_extension",$fileExtension,PDO::PARAM_STR);
                $tbFileReq->execute();
            }
        }

        //update tb_biz
      
        $biz = $bizArray[$i];
        $menuName = $biz['biz_menuName'];

        $getMenu= $pdo->prepare("SELECT menu_id FROM tb_menu WHERE menu_name = :menuName");
        $getMenu->bindParam(":menuName",$menuName,PDO::PARAM_STR);
        $getMenu->execute();
        $menuId = $getMenu->fetch()['menu_id'];

        $biz['menu_id'] = $menuId;

        unset($biz['biz_menuName']);
        unset($biz['biz_imageList']);

            if($biz['menu_id']!=''){

                $uploadQuery = "INSERT INTO tb_biz (file_grp_id,";
 
                foreach($biz as $key=>$value){
                    $uploadQuery = $uploadQuery . "$key" . ",";
                }
                $uploadQuery =  rtrim($uploadQuery,',');
                $uploadQuery = $uploadQuery . ") VALUES(:file_grp_id,";
        
                foreach($biz as $key=>$value){
                    $uploadQuery = $uploadQuery . ":" . "$key" . ",";
                }
                
                $uploadQuery =  rtrim($uploadQuery,',');
                $uploadQuery = $uploadQuery . ")";
             
                $uploadReq = $pdo->prepare($uploadQuery);
        
                $uploadReq->bindParam(":file_grp_id", $maxFid, PDO::PARAM_INT);

                foreach($biz as $key=>$value){
                    $uploadReq->bindValue(":" . "$key", $value, PDO::PARAM_STR);
                }
        
                $uploadReq->execute();
            }

            // print_r($uploadReq);
        
    }

    // print_r(json_decode($jsonData,true));
?>