<?php

try{
    $data = json_decode($_POST['data'], true);
    $host = 'mompopkoapi.wcoding.com';
    $user = 'mompopko_admin';
    $password = 'windMarshall92Adult';
    $port = '8833';
    $dbname = 'mompopko';
    $dsn = 'mysql:host='. $host . ';port=' . $port . ';dbname=' . $dbname;

    $pdo = new PDO($dsn, $user, $password,array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION));
}
catch(EXCEPTION $e){

}

if($_SERVER['REQUEST_METHOD']=="POST" && isset($_POST['businessToDelete'])){
    $deleteList = htmlspecialchars($_POST['businessToDelete']);
    $businessToDelete = explode(",",$deleteList);

    foreach($businessToDelete as $bizId){
        $bizId = (int)$bizId;
        $deleteReq = $pdo->prepare('DELETE FROM tb_biz WHERE biz_id = :biz_id');
        $deleteReq->bindParam(":biz_id",$bizId,PDO::PARAM_INT);
        $deleteReq->execute();
    }
}

?>