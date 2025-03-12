<?php declare(strict_types=1);

namespace Ihor\Admin\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

/**
 * @internal
 */
class Migration1741097491House extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1741097491;
    }

    public function update(Connection $connection): void
    {
        $this->createHouseTable($connection);
        $this->createHouseTranslationTable($connection);
    }

    private function createHouseTable(Connection $connection): void
    {
        $connection->executeQuery('
            CREATE TABLE IF NOT EXISTS `house` (
                `id` BINARY(16) NOT NULL,
                `number` INT(11) NOT NULL,
                `created_at` DATETIME(3) NOT NULL,
                `updated_at` DATETIME(3) NULL,
                PRIMARY KEY (`id`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ');
    }

    private function createHouseTranslationTable(Connection $connection): void
    {
        $connection->executeQuery('
            CREATE TABLE IF NOT EXISTS `house_translation` (
                `name` VARCHAR(255) NOT NULL,
                `created_at` DATETIME(3) NOT NULL,
                `updated_at` DATETIME(3) NULL,
                `house_id` BINARY(16) NOT NULL,
                `language_id` BINARY(16) NOT NULL,
                PRIMARY KEY (`house_id`,`language_id`),
                KEY `fk.house_translation.house_id` (`house_id`),
                KEY `fk.house_translation.language_id` (`language_id`),
                CONSTRAINT `fk.house_translation.house_id` FOREIGN KEY (`house_id`) REFERENCES `house` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                CONSTRAINT `fk.house_translation.language_id` FOREIGN KEY (`language_id`) REFERENCES `language` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ');
    }
}
