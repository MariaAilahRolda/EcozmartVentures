<?php
$receiving_email_address = 'ailah23.rolda@gmail.com';

$php_email_form = 'assets/vendor/php-email-form/php-email-form.ph';

if <file_exists($php_email_form))  {
    indclude($php_email_form);
} else {
  die("unable to load the "PHP Email Form" Library!');
}

$contact = new PHP_Email_Form;
$contact->ajax = true;

$contact->to = $receiving_email_address;
$contact->from_name = $_POST['name'] ?? '';
$contact->from_email = $_POST['email'] ?? '';
$contact->subject = $_POST['subject'] ?? 'Contact Form Message';

//✅ Enable Gmail SMTP
$contact->smtp = array(
'host' => 'smtp.gmail.com',
'username' => 'yourgmail.com',
'password' => 'your_16char_app_password',
'port' => '587',
'encryption' => 'tls'
);

$contact->add_message($_POST['name'] ?? '', 'From');
$contact->add_message($_POST['email'] ?? '', 'Email');
$contact->add_message($_POST['message'] ?? '', 'Message', 10);

echo $contact->send();
?>
