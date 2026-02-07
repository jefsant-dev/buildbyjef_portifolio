<?php
require 'db.php';

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['visitantId'])) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'ID de visitante não fornecido'
    ]);
    exit();
}

$visitantId = (int)$data['visitantId'];

$sql = "UPDATE visitantes SET whatsapp_clicked = 1 WHERE id = ?";
$stmt = $pdo->prepare($sql);

try {
    $stmt->execute([$visitantId]);
    echo json_encode([
        'status' => 'ok',
        'message' => 'Clique no WhatsApp registrado com sucesso'
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Erro ao registrar clique'
    ]);
}
