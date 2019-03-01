<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);    

require('controller/controller.php');

if($_SERVER['REQUEST_METHOD']=="GET"){
	if(!empty($_GET['action'])){
		switch($_GET['action']){
		case "recent":
			{	
				loadRecent((int)$_POST['nb_posts']);
				break;
			}
		case "popular":
			{
				loadPopular((int)$_POST['nb_posts']);
				break;
			}
		case "trend":
			{
				loadTrend((int)$_POST['nb_posts']);
				break;
			}
		default:
			loadRecent(3);
		}
	}else{
		loadRecent(3);
	}
}

?>
