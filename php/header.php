<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>mompopko</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="MomPopKo" />
	<link href="../public/css/style.css" rel="stylesheet" />

	<link href="../public/css/bootstrap.min.css" rel="stylesheet" />
	<link href="../public/css/fontawesome-all.css" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAjWNh6hc_mh96jtYaQOuCEAJYSECzrQgs"></script>
	<link href='../public/fonts/NanumSquare/nanumsquare.css' rel='stylesheet' type='text/css'>
	<style>
        #Restaurants_hamburger, #Restaurants_dropdown{
            display: none;
        }
	</style>

    <!-- serciceUtils -->
    <script src="../js/serviceUtils.js"></script>
    
    <script type="text/javascript" src="../public/js/jquery.min.js"></script>
    <script src="../public/js/jquery.easing.1.3.js"></script>
    <script src="../public/js/bootstrap.min.js"></script>

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
		        $('#top-sns').addClass("sticky");
		        $('#top_search').addClass("shrink");
		    }
		    else{
		        $('#top-logo').removeClass("sticky");
		        $('#top-sns').removeClass("sticky");
		        $('#top_search').removeClass("shrink");
		    }
		});
	</script>

</head>

<body>
	<div id="wrapper">
        <header>
            <div class="top">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-4">
                            <a id="logo" href="">
                                <img src="../public/img/logo.png" id="top-logo" class="top-logo" alt="logo">
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
                            <!-- this is ol tag is not used for temporarily until elastic search implemented. -->
                            <!-- <ol class="sb_dropdown sb_keyword" style="display:none;">
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
                            </ol> -->
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
        </header>

        <script>
            const logoElem = document.getElementById("logo");
            logoElem.addEventListener('click', (e) => serviceUtils.moveToIndexPage(e));
            const searchForm = document.querySelector("#top_search");
            searchForm.addEventListener('submit', (e) => serviceUtils.searchBizData(e));
        </script>
