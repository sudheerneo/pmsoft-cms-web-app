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
	$sql = "CREATE DATABASE 'users";
	if($conn->query($sql) === TRUE){
		echo "<hr>Data table cteated successfully<hr>";
	}else{ echo "<hr>failed to create table data<hr>"; }
	
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





$fname = 'Swathi'; $lname = 'Karthik'; $phnmbr = '8341187556';
$conn = new mysqli("localhost", "root", "", "crudbase");
if($conn->connect_error){
    die("<hr>coneecton falied :".$conn->connect_error."<hr>");
}else{
echo "<hr>connection success<hr>";
$sql = "INSERT INTO users (firstname, lastname, phonenumber)
    VALUES ('$fname', '$lname', '$phnmbr')";

if($conn->query($sql) === TRUE){
    echo "<hr>Tabled data cteated successfully<hr>".$sql."";
}else{ echo "<hr><b>Failed to create table data:</b><hr>".$sql."<br><b>".$conn->error."</b   >"; }

$conn->close();
echo "<hr>Connection closed<hr>";