<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);    
?>

<?php ob_start();?>

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

                    </div>
                    <div id ="#recent">
                    </div>
                </div>
                <div class="col-xs-12 alignright mgbottom30" id="recent_button">
                    <button class="btn btn-more" data-toggle="collapse" data-target="#moreThumb">See More</button>
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

<?php $content = ob_get_clean();?>
<?php require('template.php');?>

<script src="public/js/jquery.min.js"></script>
	<script src="public/js/jquery.easing.1.3.js"></script>
	<script src="public/js/bootstrap.min.js"></script>
    <script src="public/js/index.js"></script>
    <script>renderPosts(<?=$posts?>);</script>
</body>
</html>
