<?php 
    try
{
    $host = 'mompopkoapi.wcoding.com';
    $user = 'mompopko_admin';
    $password = 'windMarshall92Adult';
    $port = '8833';
    $dbname = 'mompopko';

    $dsn = 'mysql:host='. $host . ';port=' . $port . ';dbname=' . $dbname;

    $pdo = new PDO($dsn, $user, $password,array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION));

    $req = $pdo->prepare('SELECT * FROM tb_biz ORDER BY frst_input_date DESC');
    $req->execute();
    $result = $req -> fetchAll();

    echo json_encode($result);
}
    catch (Exception $e)
{
    die('Error: '. $e->getMessage());
}
?>