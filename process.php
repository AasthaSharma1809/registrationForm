<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $phone = htmlspecialchars($_POST['phone']);
  $dob = htmlspecialchars($_POST['dob']);
  $gender = htmlspecialchars($_POST['gender']);

  // Simulate successful form submission
  if (!empty($name) && !empty($email) && !empty($phone) && !empty($dob) && !empty($gender)) {
    echo 'success';
  } else {
    echo 'error';
  }
}
?>
