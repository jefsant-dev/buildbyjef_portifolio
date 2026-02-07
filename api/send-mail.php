<?php
/**
 * API de Envio de Email
 * Endpoint para receber mensagens do formulário de contato
 * e enviar via função mail() do PHP
 */

require 'db.php';

// Headers CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Responder OPTIONS request (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Verificar se é POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Método não permitido. Use POST.'
    ]);
    exit();
}

// Receber dados JSON
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validar dados recebidos
if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['subject']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Dados incompletos. Todos os campos são obrigatórios.'
    ]);
    exit();
}

// Sanitizar dados
$name = filter_var($data['name'], FILTER_SANITIZE_STRING);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$subject = filter_var($data['subject'], FILTER_SANITIZE_STRING);
$message = filter_var($data['message'], FILTER_SANITIZE_STRING);

// Validar email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Email inválido.'
    ]);
    exit();
}

// Configurações do email
$to = 'jef.jeferson.sant@gmail.com';
$email_subject = "Contato do Portfólio: $subject";

// Montar corpo do email em HTML
$email_body = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            margin: -30px -30px 20px -30px;
        }
        .header h2 {
            margin: 0;
            font-size: 24px;
        }
        .info-row {
            margin: 15px 0;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        }
        .info-label {
            font-weight: bold;
            color: #6366f1;
            display: inline-block;
            width: 100px;
        }
        .message-box {
            background: #f8f9fa;
            padding: 20px;
            border-left: 4px solid #6366f1;
            margin: 20px 0;
            border-radius: 4px;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #eee;
            text-align: center;
            color: #999;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>📧 Nova Mensagem do Portfólio</h2>
        </div>
        
        <div class='info-row'>
            <span class='info-label'>Nome:</span>
            <span>$name</span>
        </div>
        
        <div class='info-row'>
            <span class='info-label'>Email:</span>
            <span><a href='mailto:$email'>$email</a></span>
        </div>
        
        <div class='info-row'>
            <span class='info-label'>Assunto:</span>
            <span>$subject</span>
        </div>
        
        <div class='message-box'>
            <strong>Mensagem:</strong><br><br>
            " . nl2br(htmlspecialchars($message)) . "
        </div>
        
        <div class='footer'>
            <p>Mensagem recebida através do formulário de contato do portfólio</p>
            <p>Data: " . date('d/m/Y H:i:s') . "</p>
        </div>
    </div>
</body>
</html>
";

// Headers do email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Portfolio <noreply@" . $_SERVER['HTTP_HOST'] . ">" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Tentar enviar o email
try {
    $mail_sent = mail($to, $email_subject, $email_body, $headers);
    
    if ($mail_sent) {
        // Log de sucesso (opcional)
        error_log("Email enviado com sucesso para: $to | De: $email | Assunto: $subject");
        
        // Atualizar campo send_message se visitantId foi fornecido
        if (isset($data['visitantId'])) {
            $visitantId = (int)$data['visitantId'];
            $updateSql = "UPDATE visitantes SET send_message = 1 WHERE id = ?";
            $updateStmt = $pdo->prepare($updateSql);
            try {
                $updateStmt->execute([$visitantId]);
            } catch (Exception $updateError) {
                error_log("Erro ao atualizar send_message: " . $updateError->getMessage());
            }
        }
        
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Email enviado com sucesso!'
        ]);
    } else {
        // Log de erro
        error_log("Erro ao enviar email | Para: $to | De: $email");
        
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Erro ao enviar email. Por favor, tente novamente.'
        ]);
    }
} catch (Exception $e) {
    // Log de exceção
    error_log("Exceção ao enviar email: " . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Erro interno do servidor.'
    ]);
}
?>