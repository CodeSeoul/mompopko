<?php

require_once('dbConnect.php');

//increase view count
$incViewCntQuery = 'UPDATE tb_biz SET biz_view_cnt = biz_view_cnt +1 WHERE biz_id=:biz_id';
$incViewCntReq = $pdo->prepare($incViewCntQuery);
$incViewCntReq->bindParam(":biz_id",htmlspecialchars($_GET['biz_id']),PDO::PARAM_INT);
$incViewCntReq->execute();

// get business info for this business page
$getBizInfoQuery = 'SELECT * FROM tb_biz LEFT JOIN tb_file ON tb_biz.file_grp_id = tb_file.file_grp_id WHERE tb_biz.biz_id = :biz_id ORDER BY tb_file.file_order ASC';
$getBizInfoReq = $pdo->prepare($getBizInfoQuery);
$getBizInfoReq->bindParam(":biz_id",$_GET['biz_id'],PDO::PARAM_INT);
$getBizInfoReq->execute();
$bizInfo = $getBizInfoReq->fetchAll();
?>

<!DOCTYPE html>
<html>
	<!-- includes <head>, <body> <header> tags -->
	<?php require "header.php"?>

	<?php require('./../php/biz_db.php');?>

	<section id="content_page">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<h3 class="title"><?= $bizInfo[0]['biz_name'];?></h3>
					<h5 class="thumb-category">
						<span>
							<i class="fas fa-utensils"></i>
							<span class="main">
								<?= $menu_navi;?>
							</span>
							<i class="fas fa-arrow-right"></i>
						</span>
						<span>
							<i class="fas fa-map-pin"></i>
							<span class="sub">
							<?php 
								$biz_district_real = str_replace("-gu", "", $bizInfo[0]['biz_district']);
								echo $biz_district_real . " , " . $bizInfo[0]['biz_name'];
							?>
							</span>
							<i class="fas fa-arrow-right"></i>
						</span>
						<span>
							<i class="fas fa-calendar"></i>
							<span class="sub">Opened <?= $bizInfo[0]['biz_open_date'] ?></span>
						</span>
					</h5>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-4">
					<!-- main Image -->
					<img src="<?= "../" .str_replace('/var/www/html/',"public/",$bizInfo[0]['file_path'])?>" width="100%" alt="" />
				</div>
				<div class="col-xs-8">
					<div id='map'></div>
				</div>
				<div class="col-xs-12">
					<div class="slider">
							<div class="flexslider carousel">
								<ul class="slides">
									<!-- sub images -->
									<?php for($i=1; $i<count($bizInfo); $i++):?>
									<li>
										<img src="<?= "../" .str_replace('/var/www/html/',"public/",$bizInfo[$i]['file_path'])?>"/>
									</li>
									<?php endfor?>
								</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12">
					<ul class="story_detail">
						<li><i class="fas fa-user"></i> Owner: <span class="title"><?= $biz_owner;?></span></li>
						<li><i class="fas fa-clock"></i> Published: <span><?= $biz_interview_date; ?></span></li>
					</ul>
					<div class="story">
						<?= $biz_interview_conts; ?>
						<div class="story_highlight">
							<span><?= ($biz_popular_item=='')? '' : "<b>Popular : </b>" . $biz_popular_item;?></span><?= ($biz_popular_item=='')? '' : '<br>'?>
							<span><?= ($biz_popular_item=='')? '' : "<b>Recommended : </b>" . $biz_popular_item;?></span>
						</div>
					</div>
					<ul class="story_contact">
						<li><span><i class="fas fa-phone"></i> Telephone: </span><?= $biz_tel;?></li>  | 
						<li><span><i class="fas fa-clock"></i> Hours: </span><?= $biz_open_hour;?></li>  | 
						<li><span><i class="fab fa-instagram"></i> Instagram: </span> <a>
						<?php 
						$takeout_insta = array(" ","'",",");
						echo "@" . str_replace($takeout_insta, "", $real_biz_name);
						?>
						</a></li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section id="related_post">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<h3 class="title">Perhaps you'd like...</h3>
				</div>
				<!-- Recommended Posts Here -->
			</div>
		</div>
	</section>

	<!-- includes <body> <footer>, <a> for scroll up, 3 <script> tags -->
	<?php require "footer.php"?>

	<!-- footer.php -->
	<!--<footer>
		<div class="container">
			<div class="row aligncenter">
				<div class="col-sm-12">
					<div class="subscribe">
						<h3 class="title">Subscribe</h3>
						<span class="email"><i class="far fa-envelope-open"></i><input type="text" placeholder="Please enter your email." id="email" autocomplete="off" /></span>
					</div>
					<ul class="sns-list">
						<li><a><i class="fab fa-facebook-square"></i></a></li>
						<li><a><i class="fab fa-instagram"></i></a></li>
						<li><a><i class="fab fa-youtube"></i></a></li>
					</ul>
				</div>
				<div class="col-sm-12">
					<ul class="link-list">
						<li>
							<a href="">ABOUT</a>
						</li>
						<li>MOMPOPKO @ 2018</li>
						<li>
							<a href="">CONTACT</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
	</div>

	<a href="#" class="scrollup">
		<i class="fa fa-angle-up active"></i>
	</a> -->
    <!-- // footer.php -->

  	<!-- FlexSlider -->
	<script defer src="../public/js/jquery.flexslider.js"></script>
	<script src='../public/js/googleMap.js'></script>

	<script>createGoogleMap("<?=$bizInfo[0]['biz_address'];?>")</script>

	<script type="text/javascript">
	    $(window).load(function() {
		  $('.flexslider').flexslider({
		    animation: "slide",
		    animationLoop: false,
		    itemWidth: 210,
		    itemMargin: 5,
		    minItems: 2,
		    maxItems: 4
		  });
		});
	</script>
	<script>
		$(window).load(function() {
			createGoogleMap("<?=$bizInfo[0]['biz_address'];?>")
			let menu_id = <?=$bizInfo[0]['menu_id']?>;
			serviceUtils.fetchRecommendedPosts(menu_id);
		});
	</script>
</body>
</html>