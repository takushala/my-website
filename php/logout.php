<?php
session_start();
session_unset();
session_destroy();
header("Location: ../template/home.php?logout=successful");
?>