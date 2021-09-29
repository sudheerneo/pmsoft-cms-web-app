<?php

function createData(){
	//echo "<script>alert('create request initiated')</script>";
	$server = 'localhost';
	$user = 'root';
	$pass = '';
	$dbname = 'jlum';

//////pdo method
	try {
		$conn = new PDO("mysql:host = ".$server."; dbname = ".$dbname, $user, $pass);
		$conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		echo "PDO Method - connection success ";
	}
	catch(PDOException $e){
		echo "PDO Method - connection failed: ".$e -> getMessage();
	}
	$conn = null;

//////object oriented method
	$conn = new mysqli($server, $user, $pass);
	if($conn->connect_error){
		die('<br>Object oriented method - connection failed: '. $conn->connect_error);
	}
	echo '<br>Object oriented method - connection success';
	$conn->close();


/////procedural method
	$conn = mysqli_connect($server, $user, $pass);
	if(!$conn){
		die('<br> Procedural method - connection failed: '.mysqli_connect_error());
	}
	echo '<br>Procedural method - connection success';
	mysqli_close($conn);
}



?>