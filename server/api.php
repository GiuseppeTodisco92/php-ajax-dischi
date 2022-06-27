<?php

require_once __DIR__ . '/database.php';


$response = $database;

if(!empty($_GET['index']) && is_numeric($_GET['index'])) {
    $response = $database[$_GET['index']];
};

header('Content-Type: application/json');
echo json_encode($response);

?>