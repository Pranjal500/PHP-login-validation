
<?php
// $first_name = $_POST["first_name"];
// $last_name = $_POST["last_name"];
// $email = $_POST["email"];
// $phone = $_POST["phone"];
// $have_website = $_POST["have_website"];
// $website = $_POST["website"];

// $conn = new mysqli('localhost','root', '' , 'form');

// // Check connection
// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }else{
//   $stmt = $conn->prepare("insert into registration(first_name, last_name, email, phone, have_website, website)
//   values(?, ?, ?, ?, ?, ?)");
//   $stmt->blind_param("sssiss", $first_name,$last_name,$email,$phone,$have_website,$website) ;
//   $stmt->execute();
//   echo"Registration Successfully....";
//   $stmt->close();
//   $conn->close();
// }
 $username = "root";
 $password = "";
 $server = "localhost";
 $db = "form";
$conn = mysqli_connect($server, $username,$password,$db);
if ($conn->connect_error) {
  die("Connection failed : " .$conn->connect_error);
}else{
  echo"Connection Successful";
}





?>