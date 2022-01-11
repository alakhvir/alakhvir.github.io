<?php
  $name = $_REQUEST['name'];
  $email = $_REQUEST['email'];
  $message = $_REQUEST['message'];


if (empty($name) || empty($email) || empty($message)){

  echo "Please fill all the fields";
}
else {
  mail("alakhvir@gmail.com", "New Message", $message, "From: $name < $email>");
  echo "<script type='text/javascript'>alert('Your message has been sent successfully! Thanks');window.history.log(-1);</script>"
}

 ?>
