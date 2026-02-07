-- Cria a tabela `visitantes` usada por php/save-visitor.php
CREATE TABLE IF NOT EXISTS `visitantes` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `ip_address` VARCHAR(45) DEFAULT NULL COLLATE utf8mb4_unicode_ci,
  `user_agent` TEXT COLLATE utf8mb4_unicode_ci,
  `language` VARCHAR(10) DEFAULT NULL COLLATE utf8mb4_unicode_ci,
  `platform` VARCHAR(50) DEFAULT NULL COLLATE utf8mb4_unicode_ci,
  `screen_resolution` VARCHAR(20) DEFAULT NULL COLLATE utf8mb4_unicode_ci,
  `timezone` VARCHAR(50) DEFAULT NULL COLLATE utf8mb4_unicode_ci,
  `cookies_enabled` TINYINT(1) DEFAULT NULL,
  `current_url` TEXT COLLATE utf8mb4_unicode_ci,
  `referrer` TEXT COLLATE utf8mb4_unicode_ci,
  `theme_mode` VARCHAR(10) DEFAULT NULL COLLATE utf8mb4_unicode_ci,
  `site_language` VARCHAR(5) DEFAULT NULL COLLATE utf8mb4_unicode_ci,
  `browser_datetime` VARCHAR(50) DEFAULT NULL COLLATE utf8mb4_unicode_ci,
  `http_method` VARCHAR(10) DEFAULT NULL COLLATE utf8mb4_unicode_ci,
  `hostname` VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci,
  `whatsapp_clicked` INT(1) DEFAULT 0,
  `send_message` TINYINT(1) DEFAULT 0,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
