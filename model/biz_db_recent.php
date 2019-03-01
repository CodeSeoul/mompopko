<?php 
    try
{
    $host = 'mompopkoapi.wcoding.com';
    $user = 'mompopko_api';
    $password = 'uAVPVDMZz9N8d9RC';
    $port = '8833';
    $dbname = 'mompopko';

    $dsn = 'mysql:host='. $host . ';port=' . $port . ';dbname=' . $dbname;

    $pdo = new PDO($dsn, $user, $password,array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION));

    $nb_posts = (int)$_POST['nb_posts'];
    $req = $pdo->prepare('SELECT * 
                            FROM tb_biz 
                        INNER JOIN tb_menu
                            ON tb_menu.menu_id = tb_biz.menu_id
                        LEFT JOIN tb_file 
                            ON tb_biz.file_grp_id = tb_file.file_grp_id 
                            WHERE tb_file.file_order=1 
                        ORDER BY tb_biz.frst_input_date DESC 
                        LIMIT 0, :nb_posts'
                        );
    $req->bindParam(":nb_posts",$nb_posts,PDO::PARAM_INT);
    $req->execute();
    $result = $req -> fetchAll();

    echo json_encode($result);
}
    catch (Exception $e)
{
    die('Error: '. $e->getMessage());
}
?>