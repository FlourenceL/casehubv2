-- CreateTable
CREATE TABLE `mst_contact_details` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `ContactPerson` VARCHAR(255) NULL,
    `ContactNumber` INTEGER NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_document` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Document` VARCHAR(255) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_documenttype` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `CreatedAt` TIMESTAMP(0) NULL,
    `DocumentType` VARCHAR(255) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_logbook` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Logbook` VARCHAR(255) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_requesting_office` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `RequestingOffice` VARCHAR(255) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_spms` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Spms` VARCHAR(255) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_status` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Status` VARCHAR(255) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_user` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `UserName` VARCHAR(255) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trn_file` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `DateTimeReceived` TIMESTAMP(0) NULL,
    `DateCompleted` TIMESTAMP(0) NULL,
    `DaysPending` INTEGER NULL,
    `TitleSubjectPurpose` VARCHAR(255) NULL,
    `ContactDetailId` INTEGER NULL,
    `LogbookId` INTEGER NULL,
    `DocumentId` INTEGER NULL,
    `DocumentTypeId` INTEGER NULL,
    `RequestingOfficeId` INTEGER NULL,
    `ReviewedByUserId` INTEGER NULL,
    `SpmsId` INTEGER NULL,
    `StatusId` INTEGER NULL,
    `ActionTaken` VARCHAR(255) NULL,
    `DraftDocument` VARCHAR(255) NULL,
    `FinalDocument` VARCHAR(255) NULL,
    `ProofOfService` VARCHAR(255) NULL,

    INDEX `ContactDetailId`(`ContactDetailId`),
    INDEX `DocumentId`(`DocumentId`),
    INDEX `DocumentTypeId`(`DocumentTypeId`),
    INDEX `LogbookId`(`LogbookId`),
    INDEX `RequestingOfficeId`(`RequestingOfficeId`),
    INDEX `ReviewedByUserId`(`ReviewedByUserId`),
    INDEX `SpmsId`(`SpmsId`),
    INDEX `StatusId`(`StatusId`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `trn_file` ADD CONSTRAINT `trn_file_ibfk_1` FOREIGN KEY (`ContactDetailId`) REFERENCES `mst_contact_details`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `trn_file` ADD CONSTRAINT `trn_file_ibfk_2` FOREIGN KEY (`LogbookId`) REFERENCES `mst_logbook`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `trn_file` ADD CONSTRAINT `trn_file_ibfk_3` FOREIGN KEY (`DocumentId`) REFERENCES `mst_document`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `trn_file` ADD CONSTRAINT `trn_file_ibfk_4` FOREIGN KEY (`DocumentTypeId`) REFERENCES `mst_documenttype`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `trn_file` ADD CONSTRAINT `trn_file_ibfk_5` FOREIGN KEY (`RequestingOfficeId`) REFERENCES `mst_requesting_office`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `trn_file` ADD CONSTRAINT `trn_file_ibfk_6` FOREIGN KEY (`ReviewedByUserId`) REFERENCES `mst_user`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `trn_file` ADD CONSTRAINT `trn_file_ibfk_7` FOREIGN KEY (`SpmsId`) REFERENCES `mst_spms`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `trn_file` ADD CONSTRAINT `trn_file_ibfk_8` FOREIGN KEY (`StatusId`) REFERENCES `mst_status`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
