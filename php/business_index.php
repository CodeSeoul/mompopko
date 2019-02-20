<?php 
    try
{
    if($_SERVER['REQUEST_METHOD']="POST"){
        
        $data = json_decode($_POST['data'], true);
        $host = 'mompopkoapi.wcoding.com';
        $user = 'mompopko_admin';
        $password = 'windMarshall92Adult';
        $port = '8833';
        $dbname = 'mompopko';
    
        $dsn = 'mysql:host='. $host . ';port=' . $port . ';dbname=' . $dbname;
    
        $pdo = new PDO($dsn, $user, $password,array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION));
        
        $postPerPage = (int)$data['postPerPage'];
        $startIndex = ((int)$data['pageIndex']-1)*$postPerPage;
        
        //search key exists
        // param에 따라 정렬 기준(asd, desc) SQL query를 바꾸는 기능 구현 필요
        if($data['searchKey']==''){
            $query = 'SELECT biz_id, biz_level, biz_name, biz_tel, biz_address FROM tb_biz ORDER BY :sort LIMIT :startIndex, :numberOfPosts';
            $req = $pdo->prepare($query);

        //search key doesn't exist
        // param에 따라 정렬 기준(asd, desc) SQL query를 바꾸는 기능 구현 필요
        }else{
            $query = 'SELECT biz_id, biz_level, biz_name, biz_tel, biz_address FROM tb_biz WHERE biz_name LIKE :searchKey OR biz_tel LIKE :searchKey OR biz_address LIKE :searchKey ORDER BY :sort LIMIT :startIndex, :numberOfPosts ';
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