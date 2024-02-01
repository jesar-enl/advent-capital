-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'user');

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "surname" TEXT NOT NULL,
    "othername" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "marital" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "nin" TEXT NOT NULL,
    "nindate" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "village" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "child" TEXT NOT NULL,
    "spoucename" TEXT NOT NULL,
    "spoucemobile" TEXT NOT NULL,
    "spouceemail" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "loantype" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "words" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "bustype" TEXT NOT NULL,
    "permonth" TEXT NOT NULL,
    "collateral" TEXT NOT NULL,
    "appname" TEXT NOT NULL,
    "appdate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "emailVerifiedDate" TIMESTAMP(3),
    "password" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'user',
    "image" TEXT,
    "verifyCount" INTEGER,
    "verificationToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" UUID NOT NULL,
    "username" TEXT,
    "userId" UUID NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userId_key" ON "UserProfile"("userId");

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
