/*
  Warnings:

  - You are about to drop the column `assistantInChat` on the `Chat` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Chat` DROP COLUMN `assistantInChat`;

-- AlterTable
ALTER TABLE `User` MODIFY `expires` DATETIME(3) NOT NULL DEFAULT ADDDATE(now(), 3);
