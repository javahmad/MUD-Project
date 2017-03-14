<?php
	global $title;
	global $seperator;
	global $description;
	global $logo;
?>
<html>
	<head>
		<title><?php echo $title.$seperator.$description; ?></title>
		<link href = "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <link href="frontend/design/css/bootstrap.min.css" rel="stylesheet">
	    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
	    <link href="frontend/design/css/stylesheet.css" rel="stylesheet" type="text/css">
	    <style type="text/css" media="screen">
     * {
       margin: 0; 
       padding: 0;
     }

     div#banner { 
       position: absolute; 
       top: 0; 
       left: 0; 
       background-color: #DDEEEE; 
       width: 100%; 
     }
     div#banner-content { 
       width: 800px; 
       margin: 0 auto; 
       padding: 10px; 
       border: 1px solid #000;
     }
     div#main-content { 
       padding-top: 70px;
    }
    </style>
	</head>
	
	<body>
		<div id = "wrapper">
			<?php require_once("frontend/templates/header.php"); ?>
			<div class="layer">
				<div class="content">
					<h1 align="center" font="Algerian">Home</h1>
					<p align="center">This is the Home Page</p>
					<?php
						if(isset($_GET['msg']))
						{
							$msg = $_GET['msg'];
							
							if($msg == "loginsuccess")
							{
								$msg = "You have successfully logged in";
							}
							elseif($msg == "registersuccess")
							{
								$msg = "You have successfully registered an account";
							}
							elseif($msg == "logoutsuccess")
							{
								$msg = "You have successfully logged out";
							}
						}
						if(isset($_SESSION['loggedin']))
						{
							//DATABASE CONNECTION
							$dbserver 		= "localhost";
							$dbusername 	= "root";
							$dbpassword 	= "";
							$db 			= "mmorts";
							
							//CREATE CONNECTION
							$conn = new mysqli($dbserver, $dbusername, $dbpassword, $db);
							
							//CHECK CONNECTION
							if($conn->connect_error)
							{
								//KILL CONNECTION/ERROR MESSAGE
								die("Connection Failed: ".$conn->connect_error);
							}
							$username = $_SESSION['loggedin'];
							
							$query = "SELECT id FROM users WHERE username = '$username'";
							$result = mysqli_query($conn, $query);
							$row = mysqli_fetch_assoc($result);
							
							//USERDATA
							$userid = $row['id'];
							
							//GET INVENTORY
							$query = "SELECT name FROM inventory WHERE user_id = '$userid'";
							$result = mysqli_query($conn, $query);
							$row = mysqli_fetch_assoc($result);
							
							//USERDATA
							$user_inv = $row['name'];
							
							?>
							<h3>Workspace</h3>
							<div class="user-wrapper">
								<div class="user-map">
									<h4 align="center">Area Explored: </h4>
									<div class="map">
										<p> [o] [o] [o]</p>
										<p> [o] [x] [o]</p>
										<p> [o] [o] [o]</p>
									</div>
								</div>
								<div class="user-space">
									<div class="adventure-log" >
										<h2 align="center">Adventure Log</h2>
										<p>The Adventure Begins!</p>
										<p><strong align="center">Enter Your Command: </strong></p>
									</div>
									<form id="cmd"> 
										<div class="form-group">
											<input type="text" class="form-control" id="commands" placeholder="> ">
											<button onclick=process_cmd()>
												Perform Action
												</button>
										</div>
									</form>
								</div>
								<div class="user-inventory">
									<script>
										function display_inv(){
											var $user = user // whatever user
											var txt = "" // placeholder
									
											var i;		//pseudocode
											for (i=0; i <user.inv_count; i++){ //iterate through inventory
												print txt = user.inv[i] + <br>; // and print items individually
											}
										}
										function process_cmd(){ // returns list of words in cmd
											var x = document.getElementById("cmd");
											var cmd = x.elements[0].value;  //takes entire string entered in form
											var argv_copy = []; 
											var cmd_array = cmd.split(" "); // splits command by " "
											console.log(cmd_array);
											return cmd_array; // returns iterable cmd list
																					}	
									</script>
									<h4>User Inventory</h4>
									<p><?php echo $user_inv; ?></p>
								</div>
							</div>
							<?php
						}
					?>
					
					<a href="index.php?page=index">Index</a>
					<a href="index.php?page=contact">Contact</a>
					<div id="banner">
   						 <div id="banner-content" align="center">
    					This is your MUD, and your creative escape.
    					
    					</div>
  					</div>
  <div id="main-content">
    <p>BEGIN THE ADVENTURE! Click Here to <a href="index.php?page=login">Log-In</a></p>
  </div>
				</div>
			</div>
			<?php require_once("frontend/templates/footer.php"); ?>
		</div>
	</body>
</html>
