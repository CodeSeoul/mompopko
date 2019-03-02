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

  <?php require('biz_db.php'); ?>

      <section id="content_page">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h3 class="title"><?= $real_biz_name;?></h3>
              <h5 class="thumb-category">
                <span>
                  <i class="fas fa-utensils"></i>
                  <span class="main">	<?= $menu_navi;?></span>
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.3097393533828!2d127.04083211970381!3d37.516892001110456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca475835c1ca3%3A0x40bff6c320cb2cd0!2sGangnam-gu+Office+Station!5e0!3m2!1sen!2skr!4v1547352606119"
                width="100%"
                height="550"
                frameborder="0"
                style="border:0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <ul class="story_detail">
                <li>
                  <i class="fas fa-user"></i> Owner: 
                  <span class="title"><?= $biz_owner;?></span>
                </li>
                <li>
                  <i class="fas fa-clock"></i> Published:
                  <span><?= $biz_interview_date; ?></span>
                </li>
              </ul>
              <ul class="story_contact">
                <li>
                  <span><i class="fas fa-phone"></i> Telephone: </span>
                  <?= $biz_tel;?>
                </li>
                |
                <li>
                  <span><i class="fas fa-clock"></i> Hours: </span><?= $biz_open_hour;?>
                </li>
                |
                <li>
                  <span><i class="fab fa-instagram"></i> Instagram: </span> <a>
                  <?php 
                  $takeout = array(" ","'",",");
                  echo "@" . str_replace($takeout, "", $real_biz_name);
                  ?></a>
                </li>
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

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script>
      window.jQuery ||
        document.write('<script src="../public/js/libs/jquery-1.7.min.js">\x3C/script>');
    </script>

    <!-- FlexSlider -->
    <script defer src="../public/js/jquery.flexslider.js"></script>

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

</html>
