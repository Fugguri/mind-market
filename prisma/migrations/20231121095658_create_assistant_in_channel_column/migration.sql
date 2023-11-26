-- AlterTable
ALTER TABLE `Chat` ADD COLUMN `assistantInChat` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `User` MODIFY `expires` DATETIME(3) NOT NULL DEFAULT ADDDATE(now(), 3);
