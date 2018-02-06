<?php
    include 'connect.php';
    $num1 = isset($_GET['num1']) ? $_GET['num1'] : null;
    $num2 = isset($_GET['num2']) ? $_GET['num2'] : null;
    $sql = "select * from ind order by id limit $num1,$num2";
    $result = $conn->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    $result->close();
    $conn->close();
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>