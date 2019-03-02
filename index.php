<!DOCTYPE html>
<html>

<!-- header.php -->
	<head>
	<meta charset="utf-8">
	<title>mompopko</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="MomPopKo" />
	<link href="public/css/style.css" rel="stylesheet" />
	<link href="public/css/bootstrap.min.css" rel="stylesheet" />
	<link href="public/css/fontawesome-all.css" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet"/>
	<link href='public/fonts/NanumSquare/nanumsquare.css' rel='stylesheet' type='text/css'/>
	<style>
        #Restaurants_hamburger, #Restaurants_dropdown{
            display: none;
        }
	</style>

	<!-- serciceUtils -->
	<script type="text/javascript" src="js/serviceUtils.js"></script>
	<script type="text/javascript" src="public/js/jquery.min.js"></script>
	<script type="text/javascript">
        $(function() {
			var $ui = $('#top_search');

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

	<!-- // header.php -->

</head>

<body>
	<div id="wrapper">
	<header>
		<div class="top">
			<div class="container">
				<div class="row">
					<div class="col-xs-4">
						<a href="index.php">
							<img src="public/img/logo.png" id="top-logo" class="top-logo" alt="logo">
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
						<!-- <div class="sb sb_input_location">
							<input type="text" id="sb_location_label" value="Near" disabled/>
							<input type="text" placeholder="Seoul, Korea" id="sb_location"/>
						</div> -->
						<div class="sb">
							<input class="sb_search" type="submit" value=""/>
						</div>
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
											<h5>Restaurants</h5>
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
	<!-- // header.php -->


	<section id="content">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<ul class="nav nav-tabs">
					  	<li><h3 class="title">New Openings</h3></li>
					  	<li class="active"><a id='recent-button' data-toggle="tab" href="#recent">[RECENT]</a></li>
					  	<li><a id='popular-button' data-toggle="tab" href="#popular">[POPULAR]</a></li>
					  	<li><a id='trends-button' data-toggle="tab" href="#trends">[TRENDS]</a></li>
					</ul>
				</div>
				<div class="tab-content">
					<div id="recent" class="tab-pane fade in active">

					</div>
						<div class="col-xs-12 alignright mgbottom30" id="recent_button">
							<!-- <button class="btn btn-more" data-toggle="collapse" data-target="#moreThumb">See More</button> -->
						</div>
					</div>
					<div id="popular" class="tab-pane fade">
						
					</div>
					<div id="trends" class="tab-pane fade">
						<!-- datatrends to be added -->
					</div>
				</div>
			</div>
		</div>
	</section>

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
						<!-- <li>
							<a href="">ABOUT</a>
						</li> -->
						<li>MOMPOPKO @ 2018</li>
						<!-- <li>
							<a href="">CONTACT</a>
						</li> -->
					</ul>
				</div>
			</div>
		</div>
	</footer>
	</div>

	<a href="#" class="scrollup">
		<i class="fa fa-angle-up active"></i>
	</a>
	<script src="public/js/jquery.min.js"></script>
	<script src="public/js/jquery.easing.1.3.js"></script>
	<script src="public/js/bootstrap.min.js"></script>
	<script src="public/js/index.js"></script>
	<script type="text/javascript">
		// fetch & load for menu datas.
		serviceUtils.fetchMenu();
		
		// for search biz
		const searchForm = document.querySelector("#top_search");
		searchForm.addEventListener('submit', (e) => serviceUtils.searchBizData(e));
	</script>
	<script>
		//initial loading
		$(window).load(function(){
			loadByRecent(3);
		})
	</script>
</body>
</html>
