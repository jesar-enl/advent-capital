/*
  Warnings:

  - Added the required column `loanPeriod` to the `Letter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Letter"
ADD COLUMN "loanPeriod" TEXT NOT NULL;
