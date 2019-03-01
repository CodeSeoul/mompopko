<?php 
    try {
        $host = 'mompopkoapi.wcoding.com';
        $user = 'mompopko_admin';
        $password = 'windMarshall92Adult';
        $port = '8833';
        $dbname = 'mompopko';

        $dsn = 'mysql:host='. $host . ';port=' . $port . ';dbname=' . $dbname;

        $pdo = new PDO($dsn, $user, $password);

    } catch (Exception $e) {
        die('Error: '. $e->getMessage());
    }


    // the data which sent by menu_detail.js, fetchDetailMenuBiz()
    $data = json_decode($_POST['data'], true);
    $menu_id = (int)$data['menuId'];


    if( !empty($menu_id) ) {

        $query = "SELECT A.menu_name
                            ,CONCAT(fn_menu_parents(A.menu_id), ' > ', A.menu_name) AS menu_path
                            ,B.biz_id
                            ,B.biz_name
                            ,B.biz_level
                            ,B.file_path
                            ,B.file_order
                    FROM tb_menu A
                    LEFT JOIN (
                                SELECT
                                    A.biz_id
                                    ,A.biz_name
                                    ,A.biz_level
                                    ,A.menu_id
                                    ,B.file_path
                                    ,B.file_order
                                FROM tb_biz A
                                LEFT JOIN tb_file B
                                ON A.file_grp_id = B.file_grp_id 
                                WHERE B.file_order = 1
                                AND A.menu_id = :menuId
                                ORDER BY biz_name
                                ) B
                    ON A.menu_id = B.menu_id
                    WHERE A.menu_id = :menuId";
        // $query = "SELECT
        //                 A.biz_id
        //                 ,A.biz_name
        //                 ,A.biz_level
        //                 ,B.file_path
        //                 ,B.file_order
        //                 ,C.menu_name
        //             FROM tb_biz A
        //             INNER JOIN tb_menu C
        //             ON A.menu_id = C.menu_id
        //             LEFT JOIN tb_file B
        //             ON A.file_grp_id = B.file_grp_id 
        //             WHERE B.file_order = 1
        //             AND A.menu_id = :menuId
        //             ORDER BY biz_name";
        
        $req = $pdo->prepare($query);

        // setting for search word 
        $req->bindParam(':menuId', $menu_id,PDO::PARAM_INT);
        $req->bindParam(':menuId', $menu_id,PDO::PARAM_INT);

        //execute query
        $req->execute();

        // Result of SQL
        $resultOfSQL = json_encode([]);

        while($result=$req->fetchAll()){
            if($result!=""){
                $resultOfSQL = json_encode($result);
                print_r($resultOfSQL);
            }
        }
    }
?>