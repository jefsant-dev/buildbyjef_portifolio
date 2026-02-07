<?php
header('Content-Type: application/json');

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

$to = "jef.jeferson.sant@gmail.com";
$subject = "Contato pelo Portfólio";
$body = "Nome: $name\nEmail: $email\nMensagem:\n$message";
$headers = "From: $email";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
