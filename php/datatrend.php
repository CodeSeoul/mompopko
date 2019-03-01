<?php

// get business info for this trend page
require_once('dbConnect.php');
$getBizInfoQuery = 'SELECT * FROM tb_trend LEFT JOIN tb_file ON tb_trend.file_grp_id = tb_file.file_grp_id WHERE tb_trend.trend_id = :trend_id ORDER BY tb_file.file_order ASC';
$getBizInfoReq = $pdo->prepare($getBizInfoQuery);
$getBizInfoReq->bindParam(":trend_id",$_GET['trend_id'],PDO::PARAM_INT);
$getBizInfoReq->execute();
$bizInfo = $getBizInfoReq->fetchAll();
?>

<!DOCTYPE html>
<html>
	<!-- includes <head>, <body> <header> tags -->
    <?php require "header.php"?>
    

    <?php require "footer.php"?>

    <script defer src="../public/js/jquery.flexslider.js"></script>
	<script>
		// recommended trends
	</script>
</body>
</html>
