<?php
if(isset($_GET['req'])){
    if($_GET['req'] == 'add'){
        addData();
    }
    if($_GET['req'] == 'update'){
        updateData();
    }
    if($_GET['req'] == 'create'){
        createData();
    }
    if($_GET['req'] == 'delete'){
        deleteData();
    }
    if($_GET['req'] == 'edit'){
        //editData();
        //alert('helllo you are editing this data');
    }
    
}


function addData(){
    $conn = new mysqli("localhost", "root", "", "copycrudbase");
    if($conn->connect_error){
        die("failed: ".$conn->connect_error);
    }
    $name = $_POST['name'];
    $lname = $_POST['lname'];
    $phnmbr = $_POST['phnmbr'];
    $sql = "INSERT INTO users(fname, lname, phnmbr) VALUES ('$name', '$lname', '$phnmbr')";
    if($conn->query($sql)){
        echo "add is success in db";
    }
    else{
        echo "some problem in condition ".$sql. " error is ".$conn->error;
    }
    $conn->close();
}
function updateData(){
    $conn = new mysqli("localhost", "root", "", "copycrudbase");
    if($conn->connect_error){
        die("failed: ".$conn->connect_error);
    }
    $name = $_POST['display'];
    $sql = "SELECT * FROM users";
    $res = $conn->query($sql);
    if($res->num_rows > 0){
        $data = $res->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data);
    }

    $conn->close();

}


//create data
function createData(){
    $conn = new mysqli("localhost", "root", "", "copycrudbase");
    if($conn->connect_error){
        die("failed: ".$conn->connect_error);
    }
    $fname = $_POST['fname']; $lname = $_POST['lname']; $phnmbr = $_POST['phnmbr'];
    $sql = "INSERT INTO
        users (fname, lname, phnmbr)
        VALUES('$fname', '$lname', '$phnmbr')
    ";
    if($conn->query($sql)){
        echo "Your data successfully created";
    }else{
        echo "faliled data<br>".$sql."<br>".$conn->error;
    }
    $conn->close();
}

//delete data
function deleteData(){
    $conn = new mysqli("localhost", "root", "", "copycrudbase");
    if($conn->connect_error){
        die("failed: ".$conn->connect_error);
    }
    $id = $_POST['id']; 
    $sql = "DELETE FROM users WHERE id='$id'";
    if($conn->query($sql)){
        echo "Your data successfully deleted";
    }else{
        echo "faliled data<br>".$sql."<br>".$conn->error;
    }

    $conn->close();

}



//delete data
function editData(){
    $conn = new mysqli("localhost", "root", "", "copycrudbase");
    if($conn->connect_error){
        die("failed: ".$conn->connect_error);
    }
    $id = $_POST['id']; 
    $sql = "DELETE FROM users WHERE id='$id'";
    if($conn->query($sql)){
        echo "Your data successfully deleted";
    }else{
        echo "faliled data<br>".$sql."<br>".$conn->error;
    }

    $conn->close();

}




?>