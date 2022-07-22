-- CreateTable
CREATE TABLE `Employe` (
    `numEmploye` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `tauxHoraire` INTEGER NOT NULL,

    PRIMARY KEY (`numEmploye`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
