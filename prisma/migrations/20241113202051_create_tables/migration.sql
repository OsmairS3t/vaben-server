-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nomeusuario" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "contacesso" INTEGER NOT NULL,
    "ultimoacesso" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "associados" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tipo" INTEGER NOT NULL,
    "categoria" INTEGER NOT NULL,
    "celular" TEXT NOT NULL,
    "cpfcnpj" TEXT NOT NULL,
    "razaosocial" TEXT NOT NULL,
    "nomefantasia" TEXT NOT NULL,
    "codparc" INTEGER NOT NULL,
    "emitecartao" BOOLEAN NOT NULL,
    "situacao" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "segmento" TEXT NOT NULL,
    "vigencia" TEXT NOT NULL,
    "datavigencia" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "associados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tiposusuario" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "tiposusuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoriasusuario" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "categoriasusuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beneficiarios" (
    "id" SERIAL NOT NULL,
    "codassociado" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "categoria" INTEGER NOT NULL,

    CONSTRAINT "beneficiarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "segmentosconvenio" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "segmentosconvenio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "convenios" (
    "id" SERIAL NOT NULL,
    "segmento" INTEGER NOT NULL,

    CONSTRAINT "convenios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipossituacao" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "tipossituacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tiposvigencia" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "tiposvigencia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_nomeusuario_key" ON "usuarios"("nomeusuario");

-- CreateIndex
CREATE UNIQUE INDEX "associados_email_key" ON "associados"("email");
