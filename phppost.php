<?php

if(isset($_POST['username'])){
    $username = $_POST['username'];
}
if(isset($_POST['password'])){
    $password = $_POST['password'];
}
echo '<h1>User Name is <b>'.$username.'</b> and Password is <b>'.$password.'</b></h1>';

?>