<?php session_start(); ?>

<html>

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/styles.css">
    <script type="text/javascript" src="../js/main.js"></script>
</head>

<body id="layout-body">
    <nav id="navbar">
        <a class="nav-brand" href="./home.php">Hùn's</a>
        <a class="nav-item" id="home" href="./home.php">Home</a>
        <a class="nav-item" id="about" href="./about.php">About</a>
        <a class="nav-item" id="api" href="#">Random API</a>
        <a class="nav-item" id="game" href="#">Games</a>
        <?php
        if (isset($_SESSION['username'])) {
            echo "<a class=\"nav-item\" id=\"logout\" 
            href=\"../php/logout.php\">Welcome back, Hùn</a>";
        } else {
            echo "<a class=\"nav-item\" id=\"login\" onclick=\"openForm
            (getOffset(this))\" href=\"javascript:void(0);\">Sign in</a>";
            //echo "<a class=\"nav-item\" id=\"logout\" 
            //href=\"#\">Welcome back, Hùn</a>";
        }
        ?>
    </nav>
    
    



    <div class="popup" id="popup-form">
        <form class="popup-form-container" method="post" action="../php/login.php">
            <label for="id"><b>ID</b><input type="text" placeholder="Enter ID" name="id" id="username"></label>
            <label for="psw"><b>Password</b><input type="password" placeholder="Enter password" name="pwd" id="pwd"></label>
            <div class="popup-btn-container">
                <button type="submit" class="popup-btn" onclick="getUserData()">Login</button>
                <button type="button" class="popup-btn" onclick="closeForm()" href="javascript:void(0);">Close</button>
            </div>
        </form>
    </div>

</body>

</html>