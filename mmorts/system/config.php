<?php
	$dbserver	= "localhost";
	$dbusername	= "root";
	$dbpassword	= "";
	$db			= "mmorts";
	
	//CREATE CONNECTION
	$conn = new mysqli($dbserver, $dbusername, $dbpassword, $db);
	
	//CHECK CONNECTION
	if($conn->connect_error)
	{
		//KILL CONNECTION/ERROR MESSAGE
		die("Connection Failed: ".$conn->connect_error);
	}
	else 
	{
		//IF CONNECTION IS GOOD, GET DATA FROM DATABASE
		$query = "SELECT name, seperator, description, maintenance, logo FROM configuration";
		//STORE DATA
		$result = mysqli_query($conn, $query);
		//GRAB A ROW FROM THE TABLE
		$row = mysqli_fetch_assoc($result);
		
		//GRAB THE COLUMN 'NAME' FROM TABLE 'CONFIGURATION'
		$name = $row['name'];
		
		//GENERAL SETTINGS
		$title 			= $row['name'];
		$seperator 		= $row['seperator'];
		$description 	= $row['description'];
		$logo			= $row['logo'];
		
		//TECHNICAL SETTINGS
		$maintenance 	= $row['maintenance']; 
	}
?>