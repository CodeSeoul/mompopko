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

    $req = $pdo->prepare('SELECT B.*
                            FROM    (
                                        SELECT  fn_menu_hierarchy() AS menu_id
                                                , @level AS level
                                                , @rownum:=@rownum+1 AS rownum
                                        FROM    (
                                                    SELECT  @start_with := 0
                                                            , @id := @start_with
                                                            , @level := 0
                                                ) menu_hierarchy
                                                ,tb_menu
                                                ,(SELECT @rownum:=0) AS V
                                        WHERE   @id IS NOT NULL
                                    ) A
                            JOIN	tb_menu B
                            ON      A.menu_id = B.menu_id');
    //$req = $pdo->prepare('SELECT * FROM tb_menu ORDER BY menu_id, menu_order');
    $req->execute();
    $result = $req -> fetchAll();

    echo json_encode($result);
}
    catch (Exception $e)
{
    die('Error: '. $e->getMessage());
}
?>