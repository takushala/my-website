<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "html";


// $id = stripslashes($id);
// $pwd = stripslashes($pwd);
// $id = mysql_real_escape_string($id);
// $pwd = mysql_real_escape_string($pwd);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
?>