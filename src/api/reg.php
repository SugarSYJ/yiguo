<?php
	include 'connect.php';

	$tel = isset($_GET['phone']) ? $_GET['phone'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';
	// 查看用户名是否存在
	$sql = "select tel from user where tel='$tel'";
	$result = $conn->query($sql);
	if($result->num_rows>0){
		echo "fail";
	}else{
		// 密码md5加密
		$password = md5($password);
		$sql = "insert into user (tel,password) values('$tel','$password')";
		// 获取查询结果
		$result = $conn->query($sql);
		if($result){
			echo "ok";
		}else{
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}
	// 释放查询内存(销毁)
	$result->free();
	// 关闭连接
	$conn->close();
?>