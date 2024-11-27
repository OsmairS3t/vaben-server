/*
  Warnings:

  - You are about to drop the column `nomefantasia` on the `associados` table. All the data in the column will be lost.
  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[usuario]` on the table `associados` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contacesso` to the `associados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeparceiro` to the `associados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `associados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario` to the `associados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `convenios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "associados" DROP COLUMN "nomefantasia",
ADD COLUMN     "contacesso" INTEGER NOT NULL,
ADD COLUMN     "nomeparceiro" TEXT NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL,
ADD COLUMN     "ultimoacesso" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "usuario" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "convenios" ADD COLUMN     "nome" TEXT NOT NULL;

-- DropTable
DROP TABLE "usuarios";

-- CreateIndex
CREATE UNIQUE INDEX "associados_usuario_key" ON "associados"("usuario");
