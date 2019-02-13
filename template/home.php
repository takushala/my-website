<?php 
require "layout.php";
session_start();?>
<div id="main-section">
    <div id="sidebar">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
    </div>
    <div id="blog-section"></div> 
    <?php
    if (isset($_SESSION['username'])) {
        echo ("<script>getPost(true);</script>");
    } else {
        echo ("<script>getPost(false);</script>");
    }
    ?>
</div>
<footer id="footer">
    <script>createFooter();</script>
</footer>