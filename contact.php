<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    header("Location: contact.html");

    exit;
}


$name =
    htmlspecialchars(trim($_POST["name"] ?? ""));

$email =
    filter_var(
        trim($_POST["email"] ?? ""),
        FILTER_SANITIZE_EMAIL
    );

$company =
    htmlspecialchars(trim($_POST["company"] ?? ""));

$service =
    htmlspecialchars(trim($_POST["service"] ?? ""));

$message =
    htmlspecialchars(trim($_POST["message"] ?? ""));


if (
    empty($name) ||
    empty($email) ||
    empty($message)
) {

    die("Please complete all required fields.");
}


if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    die("Please enter a valid email address.");
}


/*
    CHANGE THIS TO YOUR REAL TRINOVA EMAIL.
*/

$to = "info@trinovatechnologies.co.za";


$subject =
    "New TriNova Website Enquiry";


$body = "

New website enquiry

Name:
$name

Email:
$email

Company:
$company

Service:
$service

Message:
$message

";


$headers =
    "From: website@trinovatechnologies.co.za\r\n" .
    "Reply-To: $email\r\n" .
    "Content-Type: text/plain; charset=UTF-8\r\n";


if (mail($to, $subject, $body, $headers)) {

    echo "

    <html>

    <head>

    <title>Message Sent</title>

    <link rel='stylesheet'
          href='css/style.css'>

    </head>

    <body>

    <section class='page-hero'>

    <p class='eyebrow'>
    TRINOVA TECHNOLOGIES
    </p>

    <h1>
    Thank you.
    </h1>

    <p>
    Your message has been received.
    We will get back to you.
    </p>

    <br>

    <a href='index.html'
       class='btn primary'>
       Back to Home
    </a>

    </section>

    </body>

    </html>

    ";
} else {

    echo "

    <h2>
    Something went wrong.
    </h2>

    <p>
    Please email us directly.
    </p>

    ";
}
