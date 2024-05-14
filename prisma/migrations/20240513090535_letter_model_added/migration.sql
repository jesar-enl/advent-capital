-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';

-- CreateTable
CREATE TABLE "Letter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "bustype" TEXT NOT NULL,
    "busLocation" TEXT NOT NULL,
    "loanType" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "loanAmount" TEXT NOT NULL,
    "loanInterest" TEXT NOT NULL,
    "security" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Letter_pkey" PRIMARY KEY ("id")
);
