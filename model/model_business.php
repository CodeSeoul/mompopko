<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);    

function load_recent($nb_posts){

    require("dbConnect.php");
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

    return json_encode($result);
}

function load_popular($nb_posts){

    require("dbConnect.php");
    $nb_posts = $nb_posts;
    $req = $pdo->prepare('SELECT * FROM tb_biz LEFT JOIN tb_file ON tb_biz.file_grp_id = tb_file.file_grp_id WHERE tb_file.file_order=1 ORDER BY tb_biz.biz_view_cnt DESC LIMIT 0, :nb_posts');
    $req->bindParam(":nb_posts",$nb_posts,PDO::PARAM_INT);
    $req->execute();
    $result = $req -> fetchAll();

    return json_encode($result);
}

function load_trend($nb_posts){

    require("dbConnect.php");
   
    $nb_posts = htmlspecialchars($nb_posts);

    $getTrendQuery = "SELECT * FROM tb_trend LEFT JOIN tb_file ON tb_trend.file_grp_id = tb_file.file_grp_id LIMIT 0, :nb_posts";

    $getTrend = $pdo->prepare($getTrendQuery);
    $getTrend->bindParam(":nb_posts", $nb_posts, PDO::PARAM_INT);
    $getTrend->execute();

    $result = $getTrend -> fetchAll();

    return json_encode($result);
}

?>