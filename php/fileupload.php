<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');
session_start();

//connect db
try
{           
    $host = 'mompopkoapi.wcoding.com';
    $user = 'mompopko_admin';
    $password = 'windMarshall92Adult';
    $port = '8833';
    $dbname = 'mompopko';

    $dsn = 'mysql:host='. $host . ';port=' . $port . ';dbname=' . $dbname;

    $pdo = new PDO($dsn, $user, $password, array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION));
}
catch (Exception $e){
    die('Error: '. $e->getMessage());
}

    $fileGrpIdReq = $pdo->query("SELECT MAX(file_grp_id) FROM tb_file");
    $fileGrpId = (int)($fileGrpIdReq->fetch())[0]+1;


    $mainImage = $_FILES['mainImage'];
    $subImages = $_FILES['subImages'];

    
    $imgDir = dirname(__DIR__) . "/img/$biz_menuName/";

    echo dirname(__FILE__) . "__FILE__ <br/>";
    

    $totalNbImage = 1 + count($subImages['name']);


    //upload Images

    for($i=0; $i<$totalNbImage;$i++){

        $uploadOk = 1;

        //main image
        if($i==$totalNbImage-1){

            $imgLogicName = $mainImage['name'];
            $imgType = strtolower(pathinfo(basename($imgLogicName),PATHINFO_EXTENSION));
            $imgPhysicName = uniqid("",true);
            $imgPath = $imgDir . basename($imgPhysicName . "." . $imgType);

            //check if its an image
            $check = getimagesize($mainImage['tmp_name']);

            if($check !== false) {
                echo "File is an image - " . $check["mime"] . ".";
            } else {
                echo "File is not an image.";
                $uploadOk = 0;
            }

            // Check file size
            if ($mainImage["size"] > 500000) {
                echo "Sorry, your file is too large.";
                $uploadOk = 0;
            }

            // Allow certain file formats
            if($imgType != "jpg" && $imgType != "png" && $imgType != "jpeg" && $imgType != "gif" ) {
                echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
                $uploadOk = 0;
            }

            // Check if $uploadOk is set to 0 by an error
            if ($uploadOk == 0) {
                echo "Sorry, your file was not uploaded.";
                // if everything is ok, try to upload file
            } else {
                if (move_uploaded_file($mainImage["tmp_name"], $imgPath)) {
                echo "The file has been uploaded.";

                $uploadMainImgQuery = "INSERT INTO tb_file (file_grp_id, file_id, file_order, file_logic_name, file_physic_name, file_path, file_extension, frst_input_date)
                VALUES(:fileGrpId, :file_id, :file_order, :file_logic_name, :file_physic_name, :file_path, :file_extension, NOW())";


                $mainImgId = 1;
                $uploadMainImgReq = $pdo->prepare($uploadMainImgQuery);
                $uploadMainImgReq->bindParam(":fileGrpId", $fileGrpId, PDO::PARAM_INT);
                $uploadMainImgReq->bindParam(":file_id", $mainImgId, PDO::PARAM_INT);
                $uploadMainImgReq->bindParam(":file_order", $mainImgId, PDO::PARAM_INT);
                $uploadMainImgReq->bindParam(":file_logic_name", $imgLogicName, PDO::PARAM_STR);
                $uploadMainImgReq->bindParam(":file_physic_name", $imgPhysicName, PDO::PARAM_STR);
                $uploadMainImgReq->bindParam(":file_path", $imgPath, PDO::PARAM_STR);
                $uploadMainImgReq->bindParam(":file_extension", $imgType, PDO::PARAM_STR);
                
                $uploadMainImgReq->execute();
                
                } else {
                exit();
                echo "Sorry, there was an error uploading your file.";
                }
            }

           break;
        }

        // sub images

        $imgLogicName = $subImages['name'][$i];
        $imgType = strtolower(pathinfo(basename($imgLogicName),PATHINFO_EXTENSION));
        $imgPhysicName = uniqid("",true);
        $imgPath = $imgDir . basename($imgPhysicName . "." . $imgType);

        //check if its an image
        $check = getimagesize($subImages['tmp_name'][$i]);

        if($check !== false) {
            echo "File is an image - " . $check["mime"] . ".";
            $uploadOk = 1;
        }
        else {
            echo "File is not an image.";
            $uploadOk = 0;
        }

        // Check file size
        if ($subImages["size"][$i] > 500000) {
            echo "Sorry, your file is too large.";
            $uploadOk = 0;
        }

        // Allow certain file formats
        if($imgType != "jpg" && $imgType != "png" && $imgType != "jpeg" && $imgType != "gif" )
        {
            echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
            $uploadOk = 0;
        }

        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0)
        {
            echo "Sorry, your file was not uploaded.";
            // if everything is ok, try to upload file
        }else{
            if (move_uploaded_file($subImages["tmp_name"][$i], $imgPath)) { 
                echo "The file has been uploaded.";
                $uploadMainImgQuery = "INSERT INTO tb_file (file_grp_id, file_id, file_order, file_logic_name, file_physic_name, file_path, file_extension, frst_input_date)
                VALUES(:fileGrpId, :file_id, :file_order, :file_logic_name, :file_physic_name, :file_path, :file_extension, NOW())";

                $subImgId = $i+2;
                $uploadMainImgReq = $pdo->prepare($uploadMainImgQuery);
                $uploadMainImgReq->bindParam(":fileGrpId", $fileGrpId, PDO::PARAM_INT);
                $uploadMainImgReq->bindParam(":file_id", $subImgId, PDO::PARAM_INT);
                $uploadMainImgReq->bindParam(":file_order", $subImgId, PDO::PARAM_INT);
                $uploadMainImgReq->bindParam(":file_logic_name", $imgLogicName, PDO::PARAM_STR);
                $uploadMainImgReq->bindParam(":file_physic_name", $imgPhysicName, PDO::PARAM_STR);
                $uploadMainImgReq->bindParam(":file_path", $imgPath, PDO::PARAM_STR);
                $uploadMainImgReq->bindParam(":file_extension", $imgType, PDO::PARAM_STR);
                
                $uploadMainImgReq->execute();
            } else {
                exit();
                echo "Sorry, there was an error uploading your file.";
            }
        }
    }

?>