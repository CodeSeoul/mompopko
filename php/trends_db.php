<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');


require("dbConnect.php");

if($_SERVER['REQUEST_METHOD']=="POST"
&& !empty($_POST['nb_posts'])
){

$nb_posts = htmlspecialchars($_POST['nb_posts']);

$getTrendQuery = "SELECT * FROM tb_trend LEFT JOIN tb_file ON tb_trend.file_grp_id = tb_file.file_grp_id LIMIT 0, :nb_posts";

$getTrend = $pdo->prepare($getTrendQuery);
$getTrend->bindParam(":nb_posts", $nb_posts, PDO::PARAM_INT);
$getTrend->execute();

$result = $getTrend -> fetchAll();

echo json_encode($result);

}

?>