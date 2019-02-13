<?php
require "server.php";
$sql= "SELECT * FROM post";
$result=$conn->query($sql);
// $json = "{\"json\":[";
$posts = array();
$i=0;
while ($row = mysqli_fetch_assoc($result)) {
    ${"post$i"}->id = $row['id'];
    ${"post$i"}->title = $row['title'];
    ${"post$i"}->date = $row['post_date'];
    ${"post$i"}->content = $row['content'];
    array_push($posts, ${"post$i"});
    $i = $i+1;
    // $json .= "{\"id\":\"$row[id]\",
    //     \"title\":\"$row[title]\",
    //     \"date\":\"$row[post_date]\",
    //     \"content\":\"$row[content]\"},";
}
//echo($json);
$json = json_encode($posts);
echo($json);
//echo str_replace('\r\n', '\\r\\n', $newJson);
?>