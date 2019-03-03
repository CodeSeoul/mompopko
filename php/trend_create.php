<?php 
//error_reporting(E_ALL);
//ini_set('display_errors', '1');

require("dbConnect_admin.php");

    if($_SERVER['REQUEST_METHOD']=="POST"
        && !empty($_POST['trend_headline'])
        && !empty($_POST['trend_article'])
        && !empty($_FILES['trend_file'])
    ){

        $trend_headline = htmlspecialchars($_POST['trend_headline']);
        $trend_article = htmlspecialchars($_POST['trend_article']);

        require "fileupload.php";
        $fileGrpId = fileupload_trend($pdo);

        $addTrendQuery = "INSERT INTO tb_trend (file_grp_id, trend_headline, trend_article, user_id) VALUES (:file_grp_id, :trend_headline, :trend_article, 1)";

        $addTrend = $pdo->prepare($addTrendQuery);
        $addTrend->bindParam(":file_grp_id", $fileGrpId, PDO::PARAM_INT);
        $addTrend->bindParam(":trend_headline", $trend_headline, PDO::PARAM_STR);
        $addTrend->bindParam(":trend_article", $trend_article, PDO::PARAM_STR);
        $addTrend->execute();

    }
?>