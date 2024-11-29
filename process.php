<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $dob = $_POST['dob'];
  $gender = $_POST['gender'];

  if (!empty($name) && !empty($email) && !empty($phone) && !empty($dob) && !empty($gender)) {
    echo 'success';
  } else {
    echo 'error';
  }
}
?>
