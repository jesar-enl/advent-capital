/*
  Warnings:

  - A unique constraint covering the columns `[image]` on the table `Application` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" ADD COLUMN "image" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Application_image_key" ON "Application"("image");
