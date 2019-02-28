<?php

require_once('dbConnect.php');
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

	<!-- header.php -->
<!-- <head>
	<meta charset="utf-8">
	<title>mompopko</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="MomPopKo" />
	<link href="../public/css/style.css" rel="stylesheet" />
	<link href="../public/css/flexslider.css" rel="stylesheet" />
	<link href="../public/css/bootstrap.min.css" rel="stylesheet" />
	<link href="../public/css/fontawesome-all.css" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
	<link href='../public/fonts/NanumSquare/nanumsquare.css' rel='stylesheet' type='text/css'>
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAjWNh6hc_mh96jtYaQOuCEAJYSECzrQgs"></script>
	<script type="text/javascript" src="../public/js/jquery.min.js"></script>
	<script type="text/javascript">
        $(function() {
			var $ui 		= $('#top_search');

			$ui.find('.sb_input_keyword').bind('focus click',function(){
				$ui.find('.sb_keyword')
				   .show();
			});
			$ui.find('.sb_input_location').bind('focus click',function(){
				$ui.find('.sb_location')
				   .show();
			});

			$ui.bind('mouseleave',function(){
				$ui.find('.sb_dropdown')
				   .hide();
			});
        });
    </script>

	<script type="text/javascript">
		$(window).scroll(function() {
		    if ($(this).scrollTop() > 50){  
		        $('#top-logo').addClass("sticky");
		        $('#top_search').addClass("shrink");
		    }
		    else{
		        $('#top-logo').removeClass("sticky");
		        $('#top_search').removeClass("shrink");
		    }
		});
    </script>
    
    <script type="text/javascript">

	var ajax = new XMLHttpRequest();
	ajax.open("POST", "../php/db.php", true);
	ajax.send();
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var result = JSON.parse(this.responseText);
			for (var i = 0; i < result.length; i++){
				var upper_menu_id = result[i].upper_menu_id;
				var menu_name = result[i].menu_name;
				if (upper_menu_id == 2){
					var restaurants_dropdown = document.querySelector("#restaurants_dropdown");
					var restaurants_hamburger = document.querySelector("#restaurants_hamburger");

					restaurants_dropdown.innerHTML += "<li><a>"+menu_name+"</a></li>";
					restaurants_hamburger.innerHTML += "<li><a>"+menu_name+"</a></li>";
				}}
				
			for (var i = 0; i < result.length; i++){
				var upper_menu_id = result[i].upper_menu_id;
				var menu_name = result[i].menu_name;
				if (upper_menu_id == 1){
					var main_bars = document.querySelector("#main_bars");
					var main_bars_hamburger = document.querySelector("#main_bars_hamburger");

					main_bars.innerHTML += "<ul class='multi-column-dropdown' id='"+menu_name+"_dropdown'><h5><a>"+menu_name+"</a></h5></ul>";
					main_bars_hamburger.innerHTML += "<ul class='multi-column-dropdown' id='"+menu_name+"_hamburger'><h5><a>"+menu_name+"</a></h5></ul>";
				}}
			
			for (var i = 0; i < result.length; i++){
				var upper_menu_id = result[i].upper_menu_id;
				var menu_name = result[i].menu_name;
				if (upper_menu_id == 15){
					var bars_dropdown = document.querySelector("#Bars_dropdown");
					var bars_hamburger = document.querySelector("#Bars_hamburger");
					
					bars_dropdown.innerHTML += "<li><a>"+menu_name+"</a></li>";
					bars_hamburger.innerHTML += "<li><a>"+menu_name+"</a></li>";
				}}
				
			for (var i = 0; i < result.length; i++){
				var upper_menu_id = result[i].upper_menu_id;
				var menu_name = result[i].menu_name;
				if (upper_menu_id == 24){
					var main_beauty = document.querySelector("#main_beauty");
					var main_beauty_hamburger = document.querySelector("#main_beauty_hamburger");

					main_beauty.innerHTML += "<ul class='multi-column-dropdown' id='"+menu_name+"_dropdown'><h5><a>"+menu_name+"</a></h5></ul>";
					main_beauty_hamburger.innerHTML += "<ul class='multi-column-dropdown' id='"+menu_name+"_hamburger'><h5><a>"+menu_name+"</a></h5></ul>";
				}}

			for (var i = 0; i < result.length; i++){
				var upper_menu_id = result[i].upper_menu_id;
				var menu_name = result[i].menu_name;
				if (upper_menu_id == 48){
					var beauty_dropdown = document.querySelector("#Beauty_dropdown");
					var beauty_hamburger = document.querySelector("#Beauty_hamburger");

					beauty_dropdown.innerHTML += "<li><a>"+menu_name+"</a></li>";
					beauty_hamburger.innerHTML += "<li><a>"+menu_name+"</a></li>";
				}}
	
			for (var i = 0; i < result.length; i++){
				var upper_menu_id = result[i].upper_menu_id;
				var menu_name = result[i].menu_name;
				if (upper_menu_id == 33){
					var fashion_dropdown = document.querySelector("#fashion_dropdown");
					var fashion_hamburger = document.querySelector("#fashion_hamburger");
					
					fashion_dropdown.innerHTML += "<h5><a>"+menu_name+"</a></h5>";
					fashion_hamburger.innerHTML += "<h5><a>"+menu_name+"</a></h5>";
				}}

			for (var i = 0; i < result.length; i++){
				var upper_menu_id = result[i].upper_menu_id;
				var menu_name = result[i].menu_name;
				if (upper_menu_id == 38){
					var entertainment_dropdown = document.querySelector("#entertainment_dropdown");
					var entertainment_hamburger = document.querySelector("#entertainment_hamburger");
					
					entertainment_dropdown.innerHTML += "<h5><a>"+menu_name+"</a></h5>";
					entertainment_hamburger.innerHTML += "<h5><a>"+menu_name+"</a></h5>";
				}}

			for (var i = 0; i < result.length; i++){
				var upper_menu_id = result[i].upper_menu_id;
				var menu_name = result[i].menu_name;
				if (upper_menu_id == 43){
					var services_dropdown = document.querySelector("#services_dropdown");
					var services_hamburger = document.querySelector("#services_hamburger");

					services_dropdown.innerHTML += "<h5><a>"+menu_name+"</a></h5>";
					services_hamburger.innerHTML += "<h5><a>"+menu_name+"</a></h5>";
				}}
			};
		}
    </script>
</head>

<body>

	<div id="wrapper">
	<header>
		<div class="top">
			<div class="container">
				<div class="row">
					<div class="col-xs-4">
						<a href="../index.php">
							<img src="../public/img/logo.png" id="top-logo" class="top-logo" alt="logo">
						</a>
					</div>
					<div class="col-xs-4"></div>
					<div class="col-xs-4">
						<ul id="top-sns" class="sns-list">
								<li>
										<a href="<?= $biz_facebook;?>"><i class="fab fa-facebook-square"></i></a>
								</li>
								<li>
										<a href="<?= $biz_instagram;?>"><i class="fab fa-instagram"></i></a>
								</li>
								<li>
										<a href="<?= $biz_youtube;?>"><i class="fab fa-youtube"></i></a>
								</li>
						</ul>
						<div class="menu">
							<a data-toggle="collapse" data-target=".navbar-collapse">
								<i class="fas fa-bars"></i>
							</a>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12">
	                	<form id="top_search" class="search_wrapper" autocomplete="off">
	                    <div class="sb sb_input_keyword">
							<input type="text" id="sb_keyword_label" value="Find" disabled/>
							<input type="text" placeholder="wine bar, spa, cafe..." id="sb_keyword"/>
						</div>
						<div class="sb sb_input_location">
							<input type="text" id="sb_location_label" value="Near" disabled/>
							<input type="text" placeholder="Seoul, Korea" id="sb_location"/>
						</div>
						<div class="sb">
							<input class="sb_search" type="submit" value=""/>
						</div>
						<ol class="sb_dropdown sb_keyword" style="display:none;">
							<li class="rank_title">
								<a href="">Most Popular</a>
							</li>
							<li class="rank_1">
								<div class="rank">
									<div class="rank_num">1.</div>
								</div>
								<a href="">Taco</a>
							</li>
							<li class="rank_2">
								<div class="rank">
									<div class="rank_num">2.</div>
								</div>
								<a href="">Wine by the Glass</a>
							</li>
							<li class="rank_3">
								<div class="rank">
									<div class="rank_num">3.</div>
								</div>
								<a href="">Nail Art</a>
							</li>
							<li class="rank_4">
								<div class="rank">
									<div class="rank_num">4.</div>
								</div>
								<a href="">Message</a>
							</li>
							<li class="rank_5">
								<div class="rank">
									<div class="rank_num">5.</div>
								</div>
								<a href="">Sauna</a>
							</li>
							<li class="rank_6">
								<div class="rank">
									<div class="rank_num">6.</div>
								</div>
								<a href="">Glasses</a>
							</li>
							<li class="rank_7">
								<div class="rank">
									<div class="rank_num">7.</div>
								</div>
								<a href="">Groceries</a>
							</li>
							<li class="rank_8">
								<div class="rank">
									<div class="rank_num">8.</div>
								</div>
								<a href="">Photography Studio</a>
							</li>
							<li class="rank_9">
								<div class="rank">
									<div class="rank_num">9.</div>
								</div>
								<a href="">Shared Housing</a>
							</li>
							<li class="rank_10">
								<div class="rank">
									<div class="rank_num">10.</div>
								</div>
								<a href="">Golf Range</a>
							</li>
						</ol>
						<ol class="sb_dropdown sb_location" style="display:none;">
							<li class="rank_title">
								<a href="">Most Popular</a>
							</li>
							<li class="rank_1">
								<div class="rank">
									<div class="near"></div>
								</div>
								<a href="">Near Me</a>
							</li>
							<li class="rank_9">
								<div class="rank">
									<div class="rank_num">1.</div>
								</div>
								<a href="">Gangnam</a>
							</li>
							<li class="rank_9">
								<div class="rank">
									<div class="rank_num">2.</div>
								</div>
								<a href="">Itaewon</a>
							</li>
							<li class="rank_9">
								<div class="rank">
									<div class="rank_num">3.</div>
								</div>
								<a href="">Garosugil</a>
							</li>
							<li class="rank_9">
								<div class="rank">
									<div class="rank_num">4.</div>
								</div>
								<a href="">Sinsa Station</a>
							</li>
							<li class="rank_9">
								<div class="rank">
									<div class="rank_num">5.</div>
								</div>
								<a href="">Haebangchon</a>
							</li>
							<li class="rank_9">
								<div class="rank">
									<div class="rank_num">6.</div>
								</div>
								<a href="">Seoul Forest</a>
							</li>
							<li class="rank_9">
								<div class="rank">
									<div class="rank_num">7.</div>
								</div>
								<a href="">Euljiro 3-ga Station</a>
							</li>
							<li class="rank_9">
								<div class="rank">
									<div class="rank_num">8.</div>
								</div>
								<a href="">Hongdae</a>
							</li>
							<li class="rank_9">
								<div class="rank">
									<div class="rank_num">9.</div>
								</div>
								<a href="">Lotte Tower</a>
							</li>
						</ol>
	                	</form>
	            	</div>
				</div>
			</div>
		</div>

		<div class="navbar navbar-default navbar-static-top">
			<div class="container">
				<div class="navbar-collapse collapse">
					<ul class="nav navbar-nav">
						<li id="all-category" class="dropdown">
							<a class="dropdown-toggle" data-toggle="dropdown"><i class="fas fa-bars"></i></a>
							<ul class="dropdown-menu multi-column columns-6">
								<div class="row">
									<div class="col-sm-2">
										<ul class="multi-column-dropdown" id="restaurants_hamburger">
											<h5>Restaurants</h5>
					                    </ul>
					                </div>
					                <div class="col-sm-2" id="main_bars_hamburger">
					                </div>
					                <div class="col-sm-2">
										<ul class="multi-column-dropdown" id="main_beauty_hamburger">
											<h5>Beauty & Health</h5>
					                    </ul>
					                </div>
					                <div class="col-sm-2">
										<ul class="multi-column-dropdown" id="fashion_hamburger">
											<h5>Fashion</h5>
					                    </ul>
					                </div>
					                <div class="col-sm-2">
										<ul class="multi-column-dropdown" id="entertainment_hamburger">
											<h5>Entertainment</h5>
					                    </ul>
					                </div>
					                <div class="col-sm-2">
										<ul class="multi-column-dropdown" id="services_hamburger">
											<h5>Services</h5>
					                    </ul>
					                </div>
					            </div>
					        </ul>
						</li>
						<li class="dropdown">
							<a href="" class="dropdown-toggle" class="main_menu" data-toggle="dropdown">Food & Drink</a>
							<ul class="dropdown-menu multi-column columns-2" id="main_food" >
								<div class="row">
									<div class="col-sm-6">
										<ul class="multi-column-dropdown" id="restaurants_dropdown">
											<h5><a>Restaurants</a></h5>
					                    </ul>
					                </div>
					                <div class="col-sm-6" id="main_bars">
					                </div>
					            </div>
					        </ul>
						</li>
						<li class="dropdown">
							<a href="" class="dropdown-toggle" class="main_menu" data-toggle="dropdown">Beauty & Health</a>
							<ul class="dropdown-menu" id="main_beauty">
		                    </ul>
						</li>
						<li class="dropdown">
							<a href="" class="dropdown-toggle" class="main_menu" data-toggle="dropdown">Fashion</a>
							<ul class="dropdown-menu" id="fashion_dropdown">
		                    </ul>
						</li>
						<li class="dropdown">
							<a href="" class="dropdown-toggle" class="main_menu" data-toggle="dropdown">Entertainment</a>
							<ul class="dropdown-menu" id="entertainment_dropdown">
		                    </ul>
						</li>
						<li class="dropdown">
							<a href="" class="dropdown-toggle" class="main_menu" data-toggle="dropdown">Services</a>
							<ul class="dropdown-menu" id="services_dropdown">
		                    </ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header> -->
	 <!-- // header.php -->

	<section id="content_page">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<h3 class="title"><?= $real_biz_name;?></h3>
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
								$biz_district_real = str_replace("-gu", "", $biz_district);
								echo $biz_district_real . " , " . $biz_province;
							?>
							</span>
							<i class="fas fa-arrow-right"></i>
						</span>
						<span>
							<i class="fas fa-calendar"></i>
							<span class="sub">Opened <?= $biz_open_date ?></span>
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
				<div id='map' style='height : 300px;'></div>
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
						<span><?= ($biz_popular_item=='')? '' : "Popular:" . $biz_popular_item;?></span><?= ($biz_popular_item=='')? '' : '<br>'?>
							<span><?= ($biz_popular_item=='')? '' : "Recommended:" . $biz_popular_item;?></span>
						</div>
					</div>
					<ul class="story_contact">
						<li><span><i class="fas fa-phone"></i> Telephone: </span><?= $biz_tel;?></li>  | 
						<li><span><i class="fas fa-clock"></i> Hours: </span><?= $biz_open_hour;?></li>  | 
						<li><span><i class="fab fa-instagram"></i> Instagram: </span> <a>
						<?php 
						$takeout = array(" ","'",",");
						echo "@" . str_replace($takeout, "", $real_biz_name);
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
	<!--
	<footer>
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
	</a>-->
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
	let menu_id = <?=$bizInfo[0]['menu_id']?>;
	serviceUtils.fetchRecommendedPosts(menu_id);
	</script>
</body>
</html>