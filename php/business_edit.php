<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require("dbConnect_admin.php");

if($_SERVER['REQUEST_METHOD']=="POST"
        && !empty($_POST['businessName'])
        && !empty($_POST['bizLevel'])
        && !empty($_POST['newAddress'])
        && !empty($_POST['province'])
        && !empty($_POST['city'])
        && !empty($_POST['district'])
        && !empty($_POST['interview'])
        && !empty($_POST['interviewDate'])
        && !empty($_POST['menuId'])
    ){
        print_r($_POST);
        $biz_name = htmlspecialchars($_POST['businessName']);
        $biz_level = htmlspecialchars($_POST['bizLevel']);
        $biz_menuId = htmlspecialchars($_POST['menuId']);
        $biz_menuName = htmlspecialchars($_POST['menuName']);
        $biz_open_date = htmlspecialchars($_POST['openingDate']);
        $biz_address = htmlspecialchars($_POST['newAddress']);
        $biz_province = htmlspecialchars($_POST['province']);
        $biz_city = htmlspecialchars($_POST['city']);
        $biz_district = htmlspecialchars($_POST['district']);
        $biz_neighborhood = htmlspecialchars($_POST['neighborhood']);
        $biz_zipcode = (int)htmlspecialchars($_POST['newZipcode']);
        $biz_tel = htmlspecialchars($_POST['tel']);
        $biz_email = htmlspecialchars($_POST['email']);
        $biz_open_hour = htmlspecialchars($_POST['openingHour']);
        $biz_owner = htmlspecialchars($_POST['ownerName']);
        $biz_interview_conts = htmlspecialchars($_POST['interview']);
        $biz_interview_date = htmlspecialchars($_POST['interviewDate']);
        $biz_website = htmlspecialchars($_POST['website']);
        $biz_facebook = htmlspecialchars($_POST['facebook']);
        $biz_instagram = htmlspecialchars($_POST['instagram']);
        $biz_youtube = htmlspecialchars($_POST['youtube']);
        $biz_twitter = htmlspecialchars($_POST['twitter']);
        $biz_id = htmlspecialchars($_POST['biz_id']);

        include "fileupload.php";
        
        //replace images
        $fileGrpId = fileupload_replace_img($pdo,$biz_id,$biz_menuName);

            $editBizQuery = 'UPDATE tb_biz SET 
                menu_id=:menu_id,
                biz_name=:biz_name, 
                biz_level=:biz_level,
                biz_open_date=:biz_open_date, 
                biz_address=:biz_address, 
                biz_province=:biz_province,
                biz_city=:biz_city,
                biz_district=:biz_district,
                biz_neighborhood=:biz_neighborhood,
                biz_zipcode=:biz_zipcode, 
                biz_tel=:biz_tel,
                biz_email=:biz_email,
                biz_open_hour=:biz_open_hour,
                biz_owner=:biz_owner,
                biz_interview_conts=:biz_interview_conts,
                biz_interview_date=:biz_interview_date,
                biz_website=:biz_website,
                biz_facebook=:biz_facebook,
                biz_instagram=:biz_instagram,
                biz_youtube=:biz_youtube,
                biz_twitter=:biz_twitter
                WHERE biz_id = :biz_id';

            $editBiz = $pdo->prepare($editBizQuery);

            $editBiz->bindParam(":menu_id", $biz_menuId,PDO::PARAM_INT);
            $editBiz->bindParam(":biz_name", $biz_name, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_level", $biz_level, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_open_date", $biz_open_date, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_address", $biz_address, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_province", $biz_province, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_city", $biz_city, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_district", $biz_district, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_neighborhood", $biz_neighborhood, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_zipcode", $biz_zipcode, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_tel", $biz_tel, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_email", $biz_email, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_open_hour", $biz_open_hour, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_owner", $biz_owner, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_interview_conts", $biz_interview_conts, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_interview_date", $biz_interview_date, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_website", $biz_website, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_facebook", $biz_facebook, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_instagram", $biz_instagram, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_youtube", $biz_youtube, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_twitter", $biz_twitter, PDO::PARAM_STR);
            $editBiz->bindParam(":biz_id", $biz_id,PDO::PARAM_INT);

            $editBiz->execute();

    }


?>