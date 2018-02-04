<?php
    include 'connect.php';
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    $sql = "select * from index";
    $result = $conn->query($sql);
    // echo $result;
    $row = $result->fetch_assoc();
    $result->close();
    $conn->close();
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>