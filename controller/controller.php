<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);    

require("model/model_business.php");

function loadRecent($nb_posts){
    echo "<script>alert('recent');</script>";
    $posts = load_recent($nb_posts);
    require('view/home.php');

}

function loadPopular($nb_posts){
    echo "<script>alert('popular');</script>";
    $posts = load_popular($nb_posts);
    require('view/home.php');

}

function loadTrend($nb_posts){
    echo "<script>alert('recent');</script>";
    $posts = load_trend($nb_posts);
    require('view/home.php');

}
?>