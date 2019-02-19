<?php 
    try
{
    if($_SERVER['REQUEST_METHOD']="GET"){
        
        $host = 'mompopkoapi.wcoding.com';
        $user = 'mompopko_admin';
        $password = 'windMarshall92Adult';
        $port = '8833';
        $dbname = 'mompopko';
    
        $dsn = 'mysql:host='. $host . ';port=' . $port . ';dbname=' . $dbname;
    
        $pdo = new PDO($dsn, $user, $password,array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION));


        $getMenuQuery = 'SELECT * FROM tb_menu'; 
        $getMenu = $pdo->prepare($getMenuQuery);
        $getMenu->execute();

        while($menu = $getMenu->fetchAll()){
            print_r(json_encode($menu));
        }
      
}
}
    catch (Exception $e)
{
    die('Error: '. $e->getMessage());
}
?>