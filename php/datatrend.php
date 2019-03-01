<?php

// get business info for this trend page
require_once('dbConnect.php');
$getTrendInfoQuery = 'SELECT * FROM tb_trend LEFT JOIN tb_file ON tb_trend.file_grp_id = tb_file.file_grp_id WHERE tb_trend.trend_id = :trend_id ORDER BY tb_file.file_order ASC';
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
					<h3 class="title"></h3>
					<h5 class="thumb-category">
						<span>
							<i class="fas fa-edit"></i>
							<span class="main"><?=$trendInfo['trend_title']?></span>
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
				<div class="col-xs-12">
					<h3 class="title">Other Business Data Trends...</h3>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4">
					<div class="thumb-box">
						<div class="thumb-img">
							<a href="trends_1.html">
								<img src="img/trends/graph_1.jpg" width="100%" alt="" />
							</a>
						</div>
						<div class="thumb-content-2">
							<a href="trends_1.html">
								<div class="row">
									<div class="col-xs-12 thumb-name">
										<span>Openings by Category 2018</span>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4">
					<div class="thumb-box">
						<div class="thumb-img">
							<a href="">
								<img src="img/trends/graph_2.jpg" width="100%" alt="" />
							</a>
						</div>
						<div class="thumb-content-2">
							<a href="">
								<div class="row">
									<div class="col-xs-12 thumb-name">
										<span>Open and Closure Rate (5 year trend)</span>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4">
					<div class="thumb-box">
						<div class="thumb-img">
							<a href="">
								<img src="img/trends/graph_3.jpg" width="100%" alt="" />
							</a>
						</div>
						<div class="thumb-content-2">
							<a href="">
								<div class="row">
									<div class="col-xs-12 thumb-name">
										<span>Openings by Location</span>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

<script src='../public/js/trend.js'></script>

<?php $content=ob_get_clean();?>

<?php require('template.php');?>
