<?php 
    try
{
    if($_SERVER['REQUEST_METHOD']="POST"){
        
        $data = json_decode($_POST['data'], true);
        $host = 'mompopkoapi.wcoding.com';
        $user = 'mompopko_api';
        $password = 'uAVPVDMZz9N8d9RC';
        $port = '8833';
        $dbname = 'mompopko';
    
        $dsn = 'mysql:host='. $host . ';port=' . $port . ';dbname=' . $dbname;
    
        $pdo = new PDO($dsn, $user, $password,array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION));
        
        $postPerPage = (int)$data['postPerPage'];
        $startIndex = ((int)$data['pageIndex']-1)*$postPerPage;
        
        //search key doesn't exist
        // param에 따라 정렬 기준(asd, desc) SQL query를 바꾸는 기능 구현 필요
        if($data['searchKey']==''){
            //$query = 'SELECT * FROM tb_biz ORDER BY :sort LIMIT :startIndex, :numberOfPosts';
            $query = 'SELECT A.biz_id
                            ,A.menu_id
                            ,(SELECT SA.menu_name FROM tb_menu SA WHERE SA.menu_id = A.menu_id) AS menu_name
                            ,A.file_grp_id
                            ,A.biz_name
                            ,A.biz_level
                            ,A.biz_view_cnt
                            ,A.biz_owner
                            ,A.biz_open_date
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
                            ,A.biz_interview_date
                            ,A.biz_popular_item
                            ,A.biz_recommended
                            ,A.biz_website
                            ,A.biz_facebook
                            ,A.biz_instagram
                            ,A.biz_youtube
                            ,A.biz_twitter
                            ,A.frst_input_date
                            ,A.last_update_date
                        FROM tb_biz A 
                        ORDER BY :sort 
                        LIMIT :startIndex, :numberOfPosts';
            $req = $pdo->prepare($query);

        //search key exists
        // param에 따라 정렬 기준(asd, desc) SQL query를 바꾸는 기능 구현 필요
        }else{
            //$query = 'SELECT * FROM tb_biz WHERE biz_name LIKE :searchKey OR biz_tel LIKE :searchKey OR biz_address LIKE :searchKey ORDER BY :sort LIMIT :startIndex, :numberOfPosts ';
            $query = 'SELECT A.biz_id
                            ,A.menu_id
                            ,(SELECT SA.menu_name FROM tb_menu SA WHERE SA.menu_id = A.menu_id) AS menu_name
                            ,A.file_grp_id
                            ,A.biz_name
                            ,A.biz_level
                            ,A.biz_view_cnt
                            ,A.biz_owner
                            ,A.biz_open_date
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
                            ,A.biz_interview_date
                            ,A.biz_popular_item
                            ,A.biz_recommended
                            ,A.biz_website
                            ,A.biz_facebook
                            ,A.biz_instagram
                            ,A.biz_youtube
                            ,A.biz_twitter
                            ,A.frst_input_date
                            ,A.last_update_date
                        FROM tb_biz A 
                        WHERE A.biz_name LIKE :searchKey OR A.biz_tel LIKE :searchKey OR A.biz_address LIKE :searchKey 
                        ORDER BY :sort 
                        LIMIT :startIndex, :numberOfPosts ';
            $req = $pdo->prepare($query);
            $searchKey = "%" . $data['searchKey'] . "%";
            $req->bindParam(':searchKey', $searchKey,PDO::PARAM_STR);
            $req->bindParam(':searchKey', $searchKey,PDO::PARAM_STR);
            $req->bindParam(':searchKey', $searchKey,PDO::PARAM_STR);
        }

        $req->bindParam(':startIndex', $startIndex, PDO::PARAM_INT);
        $req->bindParam(':numberOfPosts', $postPerPage, PDO::PARAM_INT);
        $req->bindParam(':sort', $data['sort'], PDO::PARAM_STR);
        $req->execute();
        
        //show results;
        while($result=$req->fetchAll()){
            if($result!=""){
                print_r(json_encode($result));
            } else{
                print_r("");
            }
        }

    }
}
    catch (Exception $e)
{
    die('Error: '. $e->getMessage());
}
?>