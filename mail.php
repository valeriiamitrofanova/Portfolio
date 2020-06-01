<?php

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$subject = "=?utf-8?B?".base64_encode("Message from the web portfolio")."?=";
$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

$success = mail("lerimitrophanova@gmail.com", $subjet, $message, $headers);
echo $success;

?>