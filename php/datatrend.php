<?php

// get business info for this trend page
require_once('dbConnect.php');
$getTrendInfoQuery = 'SELECT *, DATE_FORMAT(tb_trend.frst_input_date, "%W, %M %d, %Y") AS fmt_date  FROM tb_trend LEFT JOIN tb_file ON tb_trend.file_grp_id = tb_file.file_grp_id WHERE tb_trend.trend_id = :trend_id ORDER BY tb_file.file_order ASC';
$getTrendInfoReq = $pdo->prepare($getTrendInfoQuery);
$getTrendInfoReq->bindParam(":trend_id",$_GET['trend_id'],PDO::PARAM_INT);
$getTrendInfoReq->execute();
$trendInfo = $getTrendInfoReq->fetch();
?>

<?php ob_start();?>

<section id="content_page">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<h3 class="title"><?=$trendInfo['trend_headline']?></h3>
					<h5 class="thumb-category">
						<span>
							<i class="fas fa-edit"></i>
							<span class="main">Published by MOMPOPKO <?=$trendInfo['fmt_date']?></span>
						</span>
					</h5>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 aligncenter">
					<img src="<?=$trendInfo['file_path']?>" width="40%" alt="" />
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12">
					<div class="trend_story">
					<?=$trendInfo['trend_article']?>
						
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="related_post">
		<div class="container">
			<div class="row">
				<!-- related posts from trend.js -->
			</div>
		</div>
	</section>

<script src='../public/js/trend.js'></script>

<?php $content=ob_get_clean();?>

<?php require('template.php');?>
