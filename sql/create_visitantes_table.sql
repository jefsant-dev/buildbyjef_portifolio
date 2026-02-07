-- Cria a tabela `visitantes` usada por php/save-visitor.php
CREATE TABLE IF NOT EXISTS `visitantes` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `ip_address` VARCHAR(45) DEFAULT NULL,
  `user_agent` TEXT,
  `language` VARCHAR(32) DEFAULT NULL,
  `platform` VARCHAR(128) DEFAULT NULL,
  `screen_resolution` VARCHAR(32) DEFAULT NULL,
  `timezone` VARCHAR(64) DEFAULT NULL,
  `cookies_enabled` TINYINT(1) DEFAULT 0,
  `current_url` TEXT,
  `referrer` TEXT,
  `theme_mode` VARCHAR(16) DEFAULT NULL,
  `site_language` VARCHAR(8) DEFAULT NULL,
  `browser_datetime` DATETIME DEFAULT NULL,
  `http_method` VARCHAR(10) DEFAULT NULL,
  `hostname` VARCHAR(255) DEFAULT NULL,
  `whatsapp_clicked` TINYINT(1) DEFAULT 0,
  `form_name` VARCHAR(255) DEFAULT NULL,
  `form_email` VARCHAR(255) DEFAULT NULL,
  `form_message` TEXT,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
