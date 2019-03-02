<?php

require("dbConnect_admin.php");

if($_SERVER["REQUEST_METHOD"]=="POST" && !empty($_POST['biz_id'])){

    $biz_id = $_POST['biz_id'];
    $increaesVcntQuery = $pdo->prepare("UPDATE tb_biz SET biz_view_cnt=biz_view_cnt+1 WHERE biz_id = :biz_id");
    $increaesVcntQuery->bindParam(":biz_id", $biz_view_cnt, PDO::PARAM_INT);
    $increaesVcntQuery->execute();

}

?>