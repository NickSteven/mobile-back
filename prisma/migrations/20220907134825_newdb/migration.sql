/*
  Warnings:

  - Added the required column `numEntr` to the `Employe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employe` ADD COLUMN `numEntr` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Entreprise` (
    `numEntreprise` INTEGER NOT NULL AUTO_INCREMENT,
    `design` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`numEntreprise`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Travail` (
    `idTravail` INTEGER NOT NULL AUTO_INCREMENT,
    `numEntr` INTEGER NOT NULL,
    `numEmplo` INTEGER NOT NULL,
    `nbheures` INTEGER NOT NULL,

    PRIMARY KEY (`idTravail`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employe` ADD CONSTRAINT `Employe_numEntr_fkey` FOREIGN KEY (`numEntr`) REFERENCES `Entreprise`(`numEntreprise`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Travail` ADD CONSTRAINT `Travail_numEntr_fkey` FOREIGN KEY (`numEntr`) REFERENCES `Entreprise`(`numEntreprise`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Travail` ADD CONSTRAINT `Travail_numEmplo_fkey` FOREIGN KEY (`numEmplo`) REFERENCES `Employe`(`numEmploye`) ON DELETE RESTRICT ON UPDATE CASCADE;
