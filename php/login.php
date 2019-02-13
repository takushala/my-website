<?php
require "server.php";


$id = $_POST['id'];
$pwd = $_POST['pwd'];

$sql= "SELECT * FROM user WHERE username='$id' and pwd='$pwd'";
$result=$conn->query($sql);
//if ($result->num_rows ==1) {
if ($row = mysqli_fetch_assoc($result)) {
    session_start();
    $_SESSION['username']=$row['username'];
    header("Location: ../template/home.php?login=succesful");
    //header("Location: ../template/home.php");
} else {
    header("Location: ../template/home.php?error=invalidinfo");
    exit();
}

// $output = "{\"pwd\":\"";
// if ($result->num_rows > 0) {
//     // output data of each row
//     while ($row = $result->fetch_assoc()) {
//         $output .= $row["pwd"];
//         $output .= "\"}";
//     }
// }

$conn->close();
//echo($output);
?>