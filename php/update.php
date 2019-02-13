<?php
require "server.php";


$newContent = $_POST['new-content'];
$id = $_POST['post-id'];
$sql = "UPDATE post
SET content = ?, post_date = now()
WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("si", $_POST['new-content'], $_POST['post-id']);
$stmt->execute();
$stmt->close();
$conn->close();
header("Location: ../template/home.php?update=succesful");

?>