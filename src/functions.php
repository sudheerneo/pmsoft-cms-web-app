<?php 
			include "dbConnect.php";
				
				function showDatabase(){
					$conn = mysqli_connect ($GLOBALS['host'], $GLOBALS['user'], $GLOBALS['pass']); 
					$sql = "SHOW DATABASES";
					foreach($conn->query($sql) as $row){
						print $row['Database'];echo"<br />";
					}
					mysqli_close($conn);
				}


				function createDatabase($selectedDatabase){
					$conn = mysqli_connect ($GLOBALS['host'], $GLOBALS['user'], $GLOBALS['pass']); 
					$sql = "CREATE DATABASE $selectedDatabase";
					if($conn->query($sql) === TRUE){
						echo "database <b>".$selectedDatabase."</b> successfully created";
					}
					mysqli_close($conn);

				}

				function deleteDatabase($selectedDatabase){
					$conn = mysqli_connect ($GLOBALS['host'], $GLOBALS['user'], $GLOBALS['pass']); 
					$sql = "DROP DATABASE $selectedDatabase";
					if($conn->query($sql) === TRUE){
						echo "databse <B>".$selectedDatabase."</B> successfully removed";
					}
					mysqli_close($conn);
				}

				function getTableData($selectedDatabase){
					$conn = mysqli_connect ($GLOBALS['host'], $GLOBALS['user'], $GLOBALS['pass'], $selectedDatabase); 
					$sql = "SHOW TABLES FROM $selectedDatabase";
					$result = mysqli_query($conn, $sql);
					
					echo "<br>";
					echo "<table border='1' class='table table-striped'";	
					while ($row = mysqli_fetch_assoc($result)) {
						echo "<tr>";
						foreach ($row as $field => $value) {
							echo "<td>" . $value . "</td>";
						}
						echo "</tr>";
					}
					echo "</table>";
					mysqli_close($conn);
				}


				function getTableDataRows($selectedDatabase, $dbTable){
					$conn = mysqli_connect ($GLOBALS['host'], $GLOBALS['user'], $GLOBALS['pass'], $selectedDatabase); 
					$sql = "SELECT * FROM $dbTable WHERE 1";
					$result = mysqli_query($conn, $sql);
					
					
					echo "<br>";
					echo "<table border='1' class='table table-striped'";	
					while ($row = mysqli_fetch_assoc($result)) {
						echo "<tr>";
						foreach ($row as $field => $value) {
							echo "<td>" . $value . "</td>";
						}
						echo "</tr>";
					}
					echo "</table>";
					mysqli_close($conn);
				}

?>