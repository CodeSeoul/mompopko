<?php

require_once('dbConnect_admin.php');

//increase view count
$incViewCntQuery = 'UPDATE tb_biz SET biz_view_cnt = biz_view_cnt +1 WHERE biz_id=:biz_id';
$incViewCntReq = $pdo->prepare($incViewCntQuery);
$incViewCntReq->bindParam(":biz_id",htmlspecialchars($_GET['biz_id']),PDO::PARAM_INT);
$incViewCntReq->execute();

// get business info for this business page
$getBizInfoQuery = "SELECT *, CONCAT(fn_menu_parents(tb_menu.menu_id), ' > ', tb_menu.menu_name) AS menu_navi FROM  tb_biz INNER JOIN tb_menu ON tb_biz.menu_id = tb_menu.menu_id LEFT JOIN tb_file ON tb_biz.file_grp_id = tb_file.file_grp_id WHERE tb_biz.biz_id = :biz_id ORDER BY tb_file.file_order ASC";
$getBizInfoReq = $pdo->prepare($getBizInfoQuery);
$getBizInfoReq->bindParam(":biz_id",$_GET['biz_id'],PDO::PARAM_INT);
$getBizInfoReq->execute();
$bizInfo = $getBizInfoReq->fetchAll();
?>

<!DOCTYPE html>
<html>
  <!-- includes <head>, <body> <header> tags -->
  <?php require "header.php"?>

  <?php require('./../php/biz_db.php'); ?>

      <section id="content_page">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h3 class="title"><?= $bizInfo[0]['biz_name'];?></h3>
              <h5 class="thumb-category">
                <span>
                  <span class="main"><?= $bizInfo[0]['menu_navi'];?></span>
                  <i class="fas fa-arrow-right"></i>
                </span>
                <span>
                  <span class="sub">
                  <?php 
                    $biz_district_real = str_replace("-gu", "", $bizInfo[0]['biz_district']);
                    echo $biz_district_real . " , " . $bizInfo[0]['biz_province'];
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
            <img src="<?= "../" .str_replace('/var/www/html/',"public/",$bizInfo[0]['file_path'])?>" width="100%" alt="" />
            </div>
            <div class="col-xs-8">
            <div id='map' style='height : 300px;'>
            </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <ul class="story_detail">
                <li>
                  <i class="fas fa-user"></i> Owner: 
                  <span class="title"><?= $bizInfo[0]['biz_owner'];?></span>
                </li>
                <li>
                  <i class="fas fa-clock"></i> Published:
                  <span><?= $bizInfo[0]['biz_interview_date']; ?></span>
                </li>
              </ul>
              <ul class="story_contact">
                <li><span><?= ($bizInfo[0]['biz_open_hour']=='')? '' : "Hours : " . $bizInfo[0]['biz_open_hour'] . " | ";?> </span>
                <li><span><?= ($bizInfo[0]['biz_tel']=='')? '' : " Phone : " . $bizInfo[0]['biz_tel'] . " | ";?></span>
                <?php 
                $takeout = array(" ","'",",");
                ?>
                <li><span><?= ($bizInfo[0]['biz_instagram']=='')? '' : "  Instagram : @" . str_replace($takeout, "", $bizInfo[0]['biz_name']);?> </span></li>
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
                  <a href="">
                    <img src="img/openings/Elliots_1.jpg" width="100%" alt="" />
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
                        <img
                          src="img/openings/Elliots_2.jpg"
                          width="100%"
                          alt=""
                        />
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
                    <img
                      src="img/openings/RouseArouse_1.jpg"
                      width="100%"
                      alt=""
                    />
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
                        <img
                          src="img/openings/RouseArouse_2.jpg"
                          width="100%"
                          alt=""
                        />
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
                    <img
                      src="img/openings/AyaCoffee_1.jpg"
                      width="100%"
                      alt=""
                    />
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
                        <img
                          src="img/openings/AyaCoffee_2.png"
                          width="100%"
                          alt=""
                        />
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
      <!-- <footer>
        <div class="container">
          <div class="row aligncenter">
            <div class="col-sm-12">
              <div class="subscribe">
                <h3 class="title">Subscribe</h3>
                <span class="email"
                  ><i class="far fa-envelope-open"></i
                  ><input
                    type="text"
                    placeholder="Please enter your email."
                    id="email"
                    autocomplete="off"
                /></span>
              </div>
              <ul class="sns-list">
                <li>
                  <a><i class="fab fa-facebook-square"></i></a>
                </li>
                <li>
                  <a><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a><i class="fab fa-youtube"></i></a>
                </li>
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

    <a href="#" class="scrollup">
      <i class="fa fa-angle-up active"></i>
    </a>
    -->
    <!-- // footer.php -->

    <!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script>
      window.jQuery ||
        document.write('<script src="../public/js/libs/jquery-1.7.min.js">\x3C/script>');
    </script> -->

    <!-- FlexSlider -->
    <script defer src="../public/js/jquery.flexslider.js"></script>
    <script src='../public/js/googleMap.js'></script>

    <script>createGoogleMap("<?=$bizInfo[0]['biz_address'];?>")</script>

    <script type="text/javascript">
      $(function() {
        SyntaxHighlighter.all();
      });
      $(window).load(function() {
        $(".flexslider").flexslider({
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
</html>
