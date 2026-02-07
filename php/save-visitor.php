<?php
require 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

$sql = "INSERT INTO visitantes (
    ip_address,
    user_agent,
    language,
    platform,
    screen_resolution,
    timezone,
    cookies_enabled,
    current_url,
    referrer,
    theme_mode,
    site_language,
    browser_datetime,
    http_method,
    hostname,
    whatsapp_clicked,
    form_name,
    form_email,
    form_message
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    $_SERVER['REMOTE_ADDR'] ?? null,
    $data['userAgent'] ?? null,
    $data['language'] ?? null,
    $data['platform'] ?? null,
    $data['screenResolution'] ?? null,
    $data['timezone'] ?? null,
    $data['cookiesEnabled'] ?? null,
    $data['currentUrl'] ?? null,
    $data['referrer'] ?? null,
    $data['themeMode'] ?? null,
    $data['siteLanguage'] ?? null,
    $data['browserDatetime'] ?? null,
    $_SERVER['REQUEST_METHOD'] ?? null,
    gethostbyaddr($_SERVER['REMOTE_ADDR']) ?? null,
    isset($data['whatsappClicked']) ? (int)$data['whatsappClicked'] : 0,
    $data['form_name'] ?? null,
    $data['form_email'] ?? null,
    $data['form_message'] ?? null
]);

echo json_encode(['status' => 'ok']);
