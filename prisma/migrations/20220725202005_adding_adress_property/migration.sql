/*
  Warnings:

  - Added the required column `adresse` to the `Employe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employe` ADD COLUMN `adresse` VARCHAR(191) NOT NULL;
