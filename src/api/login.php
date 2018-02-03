<?php
	include 'connect.php';
	
	$tel = isset($_GET['phone']) ? $_GET['phone'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';

	// 密码md5加密
	$password = md5($password);
	$sql = "select * from user where tel='$tel' and password='$password'";
	// 获取查询结果
	$result = $conn->query($sql);
	if($result->num_rows>0){
		echo 'ok';
	}else{
		echo 'fail';
	}
	// 释放查询内存(销毁)
	$result->free();
	// 关闭文件
	$conn->close();
?>