<?php

$host    = '34.151.249.135';
$dbname  = 'Login';
$db_user = 'admin';
$db_pass = 'admin';

try {
    $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
    $pdo = new PDO($dsn, $db_user, $db_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   
} catch (PDOException $e) {
    echo "Erro: ". $e->getMessage() ."";
}
?>