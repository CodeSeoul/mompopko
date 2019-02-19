<?php

$mainImage = $_FILES['mainImage'];
$subImages = $_FILES['subImages'];

$imgDir = "../images/";

$totalNbImage = 1 + count($subImages['name']);


//upload Images

for($i=0; $i<$totalNbImage;$i++){

    $uploadOk = 1;

    //main image
    if($i==$totalNbImage-1){
        
        $imgType = strtolower(pathinfo(basename($mainImage['name']),PATHINFO_EXTENSION));
        $imgPath = $imgDir . basename(uniqid("",true) . "." . $imgType);

        //check if its an image
        $check = getimagesize($mainImage['tmp_name']);

        if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
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
        if($imgType != "jpg" && $imgType != "png" && $imgType != "jpeg"
        && $imgType != "gif" ) {
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
            } else {
                echo "Sorry, there was an error uploading your file.";
            }
        }
        break;
    }
    
    // sub images


    $imgType = strtolower(pathinfo(basename($subImages['name'][$i]),PATHINFO_EXTENSION));
    $imgPath = $imgDir . basename(uniqid("",true) . "." . $imgType);

    //check if its an image
    $check = getimagesize($subImages['tmp_name'][$i]);

    if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
    } else {
    echo "File is not an image.";
    $uploadOk = 0;
    }

    // Check file size
    if ($subImages["size"][$i] > 500000) {
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
    }

    // Allow certain file formats
    if($imgType != "jpg" && $imgType != "png" && $imgType != "jpeg"
    && $imgType != "gif" ) {
        echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }

    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file
    } else {
        if (move_uploaded_file($subImages["tmp_name"][$i], $imgPath)) { 
            echo "The file has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }


    // echo strtolower(pathinfo(basename($subImages['name'][$i]),PATHINFO_EXTENSION));
    // $imgPath = $imgDir + basename(uniqid("",true) .);
    // $uploadOk =1;
    // $imageFileType = strtolower(pathinfo($subImages[$i],PATHINFO_EXTENSION));
}




?>