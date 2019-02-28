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
	<link href='fonts/NanumSquare/nanumsquare.css' rel='stylesheet' type='text/css'>
    <style>
	#Restaurants_hamburger, #Restaurants_dropdown{
		display: none;
	}
	.story_highlight span:empty{
		display: none;
	}
    </style>

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
						<a href="index.html">
							<img src="img/logo.png" id="top-logo" class="top-logo" alt="logo">
						</a>
					</div>
					<div class="col-xs-4"></div>
					<div class="col-xs-4">
						<ul id="top-sns" class="sns-list">
							<li><a><i class="fab fa-facebook-square"></i></a></li>
							<li><a><i class="fab fa-instagram"></i></a></li>
							<li><a><i class="fab fa-youtube"></i></a></li>
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
		<div class="container closed_business">
			<div class="row">
				<div class="col-xs-12">
					<div class="closed">
						<img src="img/closed.png" alt="">
					</div>
					<h3 class="title"><?= $real_biz_name;?></h3>
					<h5 class="thumb-category">
						<span>
							<i class="fas fa-utensils"></i>
							<span class="main"><?= $menu_navi;?></span>
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
					<img src="<?= $image_files; ?>" width="100%" alt="" />
				</div>
				<div class="col-xs-8">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.3097393533828!2d127.04083211970381!3d37.516892001110456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca475835c1ca3%3A0x40bff6c320cb2cd0!2sGangnam-gu+Office+Station!5e0!3m2!1sen!2skr!4v1547352606119" width="100%" height="550" frameborder="0" style="border:0" allowfullscreen></iframe>
				</div>
				<div class="col-xs-12">
					<div class="slider">
	        			<div class="flexslider carousel">
		        			<ul class="slides">
							    <li>
							      <img src="img/openings/MamaleeMarket_2.jpg" />
							    </li>
							    <li>
							      <img src="img/openings/MamaleeMarket_3.jpg" />
							    </li>
							    <li>
							      <img src="img/openings/MamaleeMarket_4.jpg" />
							    </li>
							    <li>
							      <img src="img/openings/MamaleeMarket_5.jpg" />
							    </li>
							    <li>
							      <img src="img/openings/MamaleeMarket_2.jpg" />
							    </li>
							    <li>
							      <img src="img/openings/MamaleeMarket_3.jpg" />
							    </li>
							    <li>
							      <img src="img/openings/MamaleeMarket_4.jpg" />
							    </li>
							    <li>
							      <img src="img/openings/MamaleeMarket_5.jpg" />
							    </li>
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
				<div class="col-xs-12 col-sm-6 col-md-4">
					<div class="thumb-box">
						<div class="thumb-img">
							<a href="">									<img src="img/openings/Elliots_1.jpg" width="100%" alt="" />
							</a>
						</div>
						<div class="thumb-content">
							<h5 class="thumb-category">
								<i class="fas fa-utensils"></i>
								<span class="main">Food & Drink</span>
								<span class="sub">Cocktail Bar</span>
							</h5>
							<a href="">
								<div class="row">
									<div class="col-xs-7 thumb-name">
										<span>Elliot’s</span>
									</div>
									<div class="col-xs-5 thumb-product">
										<img src="img/openings/Elliots_2.jpg" width="100%" alt="" />
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
								<img src="img/openings/RouseArouse_1.jpg" width="100%" alt="" />
							</a>
						</div>
						<div class="thumb-content">
							<h5 class="thumb-category">
								<i class="fas fa-utensils"></i>
								<span class="main">Food & Drink</span>
								<span class="sub">French Bar & Bistro</span>
							</h5>
							<a href="">
								<div class="row">
									<div class="col-xs-7 thumb-name">
										<span>Rouse Arouse</span>
									</div>
									<div class="col-xs-5 thumb-product">
										<img src="img/openings/RouseArouse_2.jpg" width="100%" alt="" />
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
								<img src="img/openings/AyaCoffee_1.jpg" width="100%" alt="" />
							</a>
						</div>
						<div class="thumb-content">
							<h5 class="thumb-category">
								<i class="fas fa-utensils"></i>
								<span class="main">Food & Drink</span>
								<span class="sub">Cafe</span>
							</h5>
							<a href="">
								<div class="row">
									<div class="col-xs-7 thumb-name">
										<span>Aya Coffee</span>
									</div>
									<div class="col-xs-5 thumb-product">
										<img src="img/openings/AyaCoffee_2.png" width="100%" alt="" />
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
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
	</a>
	-->
    <!-- // footer.php -->

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
  	<script>window.jQuery || document.write('<script src="../public/js/libs/jquery-1.7.min.js">\x3C/script>')</script>

  	<!-- FlexSlider -->
  	<script defer src="../public/js/jquery.flexslider.js"></script>

	<script type="text/javascript">
	    $(function(){
	      SyntaxHighlighter.all();
	    });
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
</body>
</html>