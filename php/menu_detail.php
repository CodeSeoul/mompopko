<!DOCTYPE html>
<html>
    
    <!-- includes <head>, <body> <header> tags -->
    <?php require "header.php"?>
    
    <section id="content">
	    <div class="container">
			<div class="row">
				<div class="col-xs-12">
					<ul class="nav nav-tabs">
                        <!-- title for "Results of keyword" -->
					  	<li><h3 class="title" id="result_title"> </h3></li>
					</ul>
				</div>
				<div class="tab-content">
					<div id="result" class="tab-pane fade in active">
                    </div>
                    <div class="col-xs-12 alignright mgbottom30" id="recent_button">
                    </div>
				</div>
			</div>
		</div>
    </section>

    <!-- includes <body> <footer>, <a> for scroll up, 3 <script> tags -->
    <?php require "footer.php"?>
    
    <!-- search logics in this script -->
    <script src="../public/js/menu_detail.js"></script>
    
</html>
