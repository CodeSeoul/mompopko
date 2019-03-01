<div class="col-xs-12 col-sm-6 col-md-4 business-post">
    <div class="thumb-box">
        <div class="thumb-img">
            <a href="index.php?action=getBiz&id=<?=$post['biz_id']?>">
                <img src=<?=str_replace("/var/www/html/","public/",$post['file_path'])?> width="100%" alt="" />
            </a>
        </div>
        <div class="thumb-content">
            <h5 class="thumb-category">
                <span class="main" class="menu_zero_span"></span>
                <span class="sub" class="menu_sub_cat"><?=$post['menu_name']?></span>
            </h5>
            <span class="img_two"></span>
                <div class="row">
                    <div class="col-xs-7 thumb-name">
                        <span><?=$post['biz_name']?></span>
                        <div style="color: #999;"></div>
                    </div>
                    <div class="col-xs-5 thumb-product">
                            <span class="img_two"></span>
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>
