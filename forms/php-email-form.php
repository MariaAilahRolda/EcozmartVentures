<?php
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
  $receiving_email_address = 'ailah23.rolda@gmail.com';

  // Correct path to the PHP Email Form library
  $php_email_form = 'assets/vendor/php-email-form/php-email-form.php';

  // Check if the PHP file exists and include it
  if (file_exists(C:\filename:$php_email_form)) {
    include($php_email_form);
  } else {
    die('Unable to load the "PHP Email Form" Library!');
  }

  // Create a new form handler object
  $contact = new PHP_Email_Form;
  $contact->ajax = true;

  // Set email parameters from form data
  $contact->to = $receiving_email_address;
  $contact->from_name = $_POST['name'] ?? '';
  $contact->from_email = $_POST['email'] ?? '';
  $contact->subject = $_POST['subject'] ?? 'Contact Form Message';

  // Optional: Configure SMTP if needed
  /*
  $contact->smtp = array(
    'host' => 'smtp.example.com',
    'username' => 'your_username',
    'password' => 'your_password',
    'port' => '587'
    'encryption' => 'tls'
  );
  */

  // Add message fields
  $contact->add_message($_POST['name'] ?? '', 'From');
  $contact->add_message($_POST['email'] ?? '', 'Email');
  $contact->add_message($_POST['message'] ?? '', 'Message', 10);

  // Send the email and output result
  echo $contact->send();
?>