<?php 
error_reporting(E_ALL);
ini_set('display_errors', '1');
session_start();
    try
{  

    $host = 'mompopkoapi.wcoding.com';
    $user = 'mompopko_admin';
    $password = 'windMarshall92Adult';
    $port = '8833';
    $dbname = 'mompopko';

    $dsn = 'mysql:host='. $host . ';port=' . $port . ';dbname=' . $dbname;

    $pdo = new PDO($dsn, $user, $password,array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION));

}
    catch (Exception $e)
{
    die('Error: '. $e->getMessage());
}

if($_SERVER['REQUEST_METHOD']=="POST"){

    //find img urls

    $file_grp_id = $_POST['file_grp_id'] ? $_POST['file_grp_id'] : false;
    if($file_grp_id){
        
        $getImgQuery = "SELECT * FROM tb_file WHERE file_grp_id = $file_grp_id";
        $getImgReq = $pdo->prepare($getImgQuery);
        $getImgReq->execute();
        while($result=$getImgReq->fetchAll()){
            print_r(json_encode($result));
        }
    }else{
        echo "noImage";
    }
}

?>