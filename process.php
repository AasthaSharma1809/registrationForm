<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $phone = htmlspecialchars($_POST['phone']);
  $dob = htmlspecialchars($_POST['dob']);
  $gender = htmlspecialchars($_POST['gender']);

  if (!empty($name) && !empty($email) && !empty($phone) && !empty($dob) && !empty($gender)) {
    echo 'success'; // Success response for AJAX
  } else {
    echo 'error';
  }
}
?>
