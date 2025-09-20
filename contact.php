<?php
header('Content-Type: text/plain');
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database configuration
$host = "localhost"; // or your XAMPP host
$user = "root";      // your DB username
$pass = "";          // your DB password
$db   = "ntotech";   // your database name

// Create connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    echo "error: Database connection failed";
    exit;
}

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Retrieve POST data safely
    $name    = isset($_POST['name']) ? $conn->real_escape_string($_POST['name']) : '';
    $email   = isset($_POST['email']) ? $conn->real_escape_string($_POST['email']) : '';
    $company = isset($_POST['company']) ? $conn->real_escape_string($_POST['company']) : '';
    $service = isset($_POST['service']) ? $conn->real_escape_string($_POST['service']) : '';
    $message = isset($_POST['message']) ? $conn->real_escape_string($_POST['message']) : '';
    $created_at = date('Y-m-d H:i:s');

    if (empty($name) || empty($email) || empty($message)) {
        echo "error: Name, Email, and Message are required";
        exit;
    }

    // Insert data into database
    $sql = "INSERT INTO contacts (name, email, company, service, message, created_at) 
            VALUES ('$name', '$email', '$company', '$service', '$message', '$created_at')";

    if ($conn->query($sql) === TRUE) {
        echo "success";
    } else {
        echo "error: " . $conn->error;
    }

} else {
    echo "error: Invalid request method";
}

$conn->close();
?>
