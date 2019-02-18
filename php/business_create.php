<?php 
    try
{
    if($_SERVER['REQUEST_METHOD']="POST"){
        
        $host = 'mompopkoapi.wcoding.com';
        $user = 'mompopko_admin';
        $password = 'windMarshall92Adult';
        $port = '8833';
        $dbname = 'mompopko';
    
        $dsn = 'mysql:host='. $host . ';port=' . $port . ';dbname=' . $dbname;
    
        $pdo = new PDO($dsn, $user, $password, array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION));
        
        $biz_name = $_POST['businessName'];
        $biz_level = $_POST['bizLevel'];
        $biz_main_iamge = $_POST['mainImage'];
        $biz_sub_images = $_POST['subImages'];
        $biz_menu = $_POST['menu'];
        $biz_open_date = $_POST['openingDate'];
        $biz_address = $_POST['newAddress'];
        $biz_province = $_POST['province'];
        $biz_city = $_POST['city'];
        $biz_district = $_POST['district'];
        $biz_zipcode = $_POST['newZipcode'];
        $biz_tel = $_POST['tel'];
        $biz_email = $_POST['email'];
        $biz_open_hour = $_POST['operatingHour'];
        $biz_owner = $_POST['ownerName'];
        $biz_interview_conts = $_POST['interview'];
        $biz_website = $_POST['website'];
        $biz_facebook = $_POST['facebook'];
        $biz_instagram = $_POST['instagram'];
        $biz_youtube = $_POST['youtube'];
        $biz_twitter = $_POST['twitter'];

        $findExistingBiz ='SELECT * FROM tb_biz WHERE biz_name = :biz_name';
        
        $checkSameBiz = $pdo->prepare($findExistingBiz);
        $checkSameBiz->bindParam(":biz_name", $biz_name,PDO::PARAM_STR);
        // $checkSameBiz->bindParam(":biz_level", $biz_level,PDO::PARAM_STR);
        // $checkSameBiz->bindParam(":biz_tel", $biz_tel,PDO::PARAM_STR);
        // AND biz_level = :biz_level AND biz_tel = :biz_tel
        $checkSameBiz->execute();

        $existingBiz='';

        while($result=$checkSameBiz->fetch()){
           $existingBiz=$result['biz_id'];
        }

        if($existingBiz!=''){

            echo "Same business exists";
            
        }else{
            $addBizQuery = 'INSERT INTO tb_biz (biz_name, biz_level, biz_menu, biz_open_date, $biz_address,
            biz_province, biz_city, biz_district, biz_zipcode, biz_tel, biz_email, biz_open_hour, biz_owner, biz_interview_conts, biz_website, biz_facebook, biz_instagram, biz_youtube, biz_twitter)
            VALUES(:biz_name, :biz_level, :biz_menu, :biz_open_date, :biz_address, :biz_province, :biz_city, :biz_district, :biz_zipcode, :biz_tel, :biz_email, :biz_open_hour, :biz_owner, :biz_interview_conts,
            :biz_website, :biz_facebook, :biz_instagram, :biz_youtube, :biz_twitter)';

            $addBiz = $pdo->prepare($addBizQuery);

            $addBiz.bindParam(":biz_name", $biz_name, PDO::PARAM_STR);
            $addBiz.bindParam(":biz_level", $biz_level, PDO::PARAM_STR);
            $addBiz.bindParam(":biz_menu", $biz_menu, PDO::PARAM_STR);
            $addBiz.bindParam(":biz_open_date", $biz_open_date, PDO::PARAM_STR);
            $addBiz.bindParam(":biz_address", $biz_address, PDO::PARAM_STR);
            $addBiz.bindParam(":biz_province", $biz_province, PDO::PARAM_STR);
            $addBiz.bindParam(":biz_city", $biz_city, PDO::PARAM_STR);
            $addBiz.bindParam(":biz_district", $biz_district, PDO::PARAM_STR);
            $addBiz.bindParam(":biz_zipcode", $biz_zipcode, PDO::PARAM_STR);
            $addBiz.bindParam(":biz_tel", $biz_tel, PDO::PARAM_STR);
            $addBiz.bindParam(":biz_email", $biz_email, PDO::PARAM_STR);
            $addBiz.bindParam(":biz_open_hour", $biz_open_hour, PDO::PARAM_STR);
            $addBiz.bindParam(":biz_owner", $biz_owner, PDO::PARAM_STR);
            $addBiz.bindParam(":biz_interview_conts", $biz_interview_conts, PDO::PARAM_STR);
            $addBiz.bindParam(":biz_website", $biz_website, PDO::PARAM_STR);
            $addBiz.bindParam(":biz_facebook", $biz_facebook, PDO::PARAM_STR);
            $addBiz.bindParam(":biz_instagram", $biz_instagram, PDO::PARAM_STR);
            $addBiz.bindParam(":biz_youtube", $biz_youtube, PDO::PARAM_STR);
            $addBiz.bindParam(":biz_twitter", $biz_twitter, PDO::PARAM_STR);

        }
    }
}
    catch (Exception $e)
{
    die('Error: '. $e->getMessage());
}
?>