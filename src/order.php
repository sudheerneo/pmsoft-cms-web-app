<?php
    include "functions.php";


    if(isset($_POST['order'])){
    	$order = $_POST['order'];
    	
    	if($order == "showDatabaseNow"){
			showDatabase();
		}
    }

	
	//create database details
    if(isset($_POST['db']) && isset($_POST['order'])){
    	$selectedDatabase = $_POST['db'];
    	$order = $_POST['order'];

    	if($order == "createDatabase"){
			//echo "db New". $selectedDatabase;
			createDatabase($selectedDatabase);
		}
    }


    //get databasedetails
    if(isset($_POST['db']) && isset($_POST['order'])){
    	$selectedDatabase = $_POST['db'];
    	$order = $_POST['order'];

    	if($order == "getTableData"){ 
			//echo "db get new ". $selectedDatabase;
			getTableData($selectedDatabase);
		}
    }


    //delete database
    if(isset($_POST['db']) && isset($_POST['order'])){
    	$selectedDatabase = $_POST['db'];
    	$order = $_POST['order'];

    	if($order == "deleteDatabase"){
			//echo "db delete ". $selectedDatabase;
			deleteDatabase($selectedDatabase);
		}
    }


    //getTabledatarows
    if(isset($_POST['db']) && isset($_POST['order']) && isset($_POST['dbTable'])){
    	$selectedDatabase = $_POST['db'];
    	$order = $_POST['order'];
    	$dbTable = $_POST['dbTable'];
    	//echo "I am sudheer";
    	if($order == "displayTableRows"){
			//echo "db table rows ". $selectedDatabase;
			getTableDataRows($selectedDatabase, $dbTable);
		}
    }

	
	




	
	
?>