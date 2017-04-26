<?php
  $to = 'edward.stennett@ackeecreative.com' . "\r\n";
  $subject = 'Subject';
  $name = $_POST['name'];
  $email = $_POST['email']; 

  $message = "************************************************** \r\n" .
  	         "Message from you website!  \r\n" .
             "************************************************** \r\n" .	
    
  	        "Name: " . $name . "\r\n" .
  	        "E-mail: " . $email . "\r\n" .
  	        "Message: " . $_POST["message"] . "\r\n"; 

  $headers = "From: " . $name . "<" . $email . "> \r\n" .
  	         "Reply-To: " . $email . "\r\n" .
             "MIME-Version: 1.0" . "\r\n" .
             "Content-type:text/html;charset=UTF-8" . "\r\n";

	mail($to, $subject, $message, $headers); 
 ?>