<?php
include_once('repeaterFunctions.php');

if(isset($_POST['name']) && $_POST['request'] && $_POST['age']){
	$name = $_POST['name'];
	$request = $_POST['request'];
	$age = $_POST['age'];

}


if ($request == 'create') { createData(); }

?>