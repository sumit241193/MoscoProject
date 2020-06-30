<?php

$host="localhost";
$user="root";
$password="";
$dbname="register";


$conn=mysqli_connect($host,$user,$password,$dbname);

if(mysqli_connect_errno())
{
    echo "Failed to Connect to Mysql ".mysqli_connect_errno();
    exit();
}

$name=$_POST['name'];
$email=$_POST['email'];
$msg=$_POST['message'];

$sql="insert into contact(name,email,message)Values('$name','$email','$msg')";

if(mysqli_query($conn,$sql))
{
    echo "New Record Inserted";
}
else {
    echo "Error ".mysqli_error($conn);
}

mysqli_close($conn);



?>