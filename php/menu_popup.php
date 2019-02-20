<?php 
    try
{
    if($_SERVER['REQUEST_METHOD']="GET"){
        
        $host = 'mompopkoapi.wcoding.com';
        $user = 'mompopko_api';
        $password = 'uAVPVDMZz9N8d9RC';
        $port = '8833';
        $dbname = 'mompopko';
    
        $dsn = 'mysql:host='. $host . ';port=' . $port . ';dbname=' . $dbname;
    
        $pdo = new PDO($dsn, $user, $password,array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION));


        $getMenuQuery = 'SELECT  CONCAT(REPEAT(\'    \', level - 1), CAST(B.menu_name AS CHAR)) AS tree_menu
                                , B.menu_name
                                , B.menu_id
                                , B.menu_page_yn
                                , A.rownum
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
                        ON      A.menu_id = B.menu_id
                        ORDER BY A.rownum'; 
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