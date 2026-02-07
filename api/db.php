<?php
$env = parse_ini_file('../.env');

try {
    $pdo = new PDO(
        "mysql:host={$env['DB_HOST']};dbname={$env['DB_NAME']};charset=utf8mb4",
        $env['DB_USER'],
        $env['DB_PASS'],
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]
    );
} catch (PDOException $e) {
    // Preparar mensagem detalhada com timestamp
    $msg = '[' . date('Y-m-d H:i:s') . '] DB connection error: ' . $e->getMessage()
        . ' in ' . $e->getFile() . ':' . $e->getLine() . PHP_EOL;

    // Registrar nos logs do sistema (error_log padrão)
    error_log($msg);

    // Registrar também em arquivo de log do projeto (mais fácil de localizar)
    $projectLog = __DIR__ . '/../logs/db-error.log';
    @file_put_contents($projectLog, $msg, FILE_APPEND | LOCK_EX);

    http_response_code(500);
    exit('Erro de conexão com banco de dados');
}
