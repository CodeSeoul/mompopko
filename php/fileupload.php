<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');
session_start();

function fileupload_biz($pdo, $biz_menuName){

    $fileGrpIdReq = $pdo->query("SELECT MAX(file_grp_id) FROM tb_file");
    $fileGrpId = (int)($fileGrpIdReq->fetch())[0]+1;

    $mainImage = $_FILES['mainImage'];
    $subImages = $_FILES['subImages'];

    // for server : $imgDir = dirname(__DIR__) . "/img/$biz_menuName/";
    // for local :
    $imgDir = "../public/img/$biz_menuName/";


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
}

function fileupload_trend($pdo){

    $fileGrpIdReq = $pdo->query("SELECT MAX(file_grp_id) FROM tb_file");
    $fileGrpId = (int)($fileGrpIdReq->fetch())[0]+1;

    $trend_file = $_FILES['trend_file'];

    $uploadOk = 1;

    //main image

    $fileLogicName = $trend_file['name'];
    $fileType = strtolower(pathinfo(basename($fileLogicName),PATHINFO_EXTENSION));
    $filePhysicName = uniqid("",true);
    // for server : $fileDir = dirname(__DIR__) . "/file/datatrend/";
    // for local :
    $fileDir = "../public/img/datatrend/";
    $filePath = $fileDir . basename($filePhysicName . "." . $fileType);

    //check if its an image
    $check = getimagesize($trend_file['tmp_name']);

    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }

    // Check file size
    if ($trend_file["size"] > 500000) {
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
    }

    // Allow certain file formats
    if($fileType != "jpg" && $fileType != "png" && $fileType != "jpeg" && $fileType != "gif" ) {
        echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }

    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
        // if everything is ok, try to upload file
    } else {

        if (move_uploaded_file($trend_file["tmp_name"], $filePath)) {
        echo "The file has been uploaded.";

        $uploadFileQuery = "INSERT INTO tb_file (file_grp_id, file_id, file_order, file_logic_name, file_physic_name, file_path, file_extension, frst_input_date)
        VALUES(:fileGrpId, :file_id, :file_order, :file_logic_name, :file_physic_name, :file_path, :file_extension, NOW())";

        $fileId = 1;
        $uploadFileReq = $pdo->prepare($uploadFileQuery);
        $uploadFileReq->bindParam(":fileGrpId", $fileGrpId, PDO::PARAM_INT);
        $uploadFileReq->bindParam(":file_id", $fileId, PDO::PARAM_INT);
        $uploadFileReq->bindParam(":file_order", $fileId, PDO::PARAM_INT);
        $uploadFileReq->bindParam(":file_logic_name", $fileLogicName, PDO::PARAM_STR);
        $uploadFileReq->bindParam(":file_physic_name", $filePhysicName, PDO::PARAM_STR);
        $uploadFileReq->bindParam(":file_path", $filePath, PDO::PARAM_STR);
        $uploadFileReq->bindParam(":file_extension", $fileType, PDO::PARAM_STR);
        
        $uploadFileReq->execute();
        
        } else {
        exit();
        echo "Sorry, there was an error uploading your file.";
        }
    }
    return $fileGrpId;
}
?>