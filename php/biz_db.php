<?php 
    try
{
    $host = 'mompopkoapi.wcoding.com';
    $user = 'mompopko_admin';
    $password = 'windMarshall92Adult';
    $port = '8833';
    $dbname = 'mompopko';

    $dsn = 'mysql:host='. $host . ';port=' . $port . ';dbname=' . $dbname;

    $pdo = new PDO($dsn, $user, $password);

    $req = $pdo->prepare('SELECT * FROM tb_biz');
    $req->execute();
    $result = $req -> fetchAll();

    echo json_encode($result);
}
    catch (Exception $e)
{
    die('Error: '. $e->getMessage());
}
?>