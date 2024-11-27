import { prisma } from "../database/prismaClient"
import { IUsuarioDTO } from "../dto/usuario.dto";
import { hashPassword } from "../utils/authenticate";

export class UsuarioRepository {
  async list() {
    const usuario = await prisma.associados.findMany()
    return usuario;
  }

  async findById(id: number) {
    const usuario = await prisma.associados.findUnique({ 
      where: { id: Number(id) } 
    });
    return usuario;
  }

  async findByUserName(nomeusuario: string) {
    const usuario = await prisma.associados.findFirst({ 
      where: { 'usuario': nomeusuario }
    })
      return usuario;
  }

  async save(data: IUsuarioDTO) {
    const usuarioExiste = await this.findByUserName(data.usuario)
    if(usuarioExiste) {
      throw new Error('Usuario ja existe')
    }
    const novasenha = await hashPassword(data.senha, 10);
    const usuarioCriado = await prisma.associados.create({ 
      data: {
        nome: data.nome,
        email: data.email,
        tipo: data.tipo,
        categoria: data.categoria,
        celular: data.celular,
        cpfcnpj: data.cpfcnpj,
        razaosocial: data.razaosocial,
        nomeparceiro: data.nomeparceiro,
        codparc: data.codparc,
        emitecartao: data.emitecartao,
        situacao: data.situacao,
        endereco: data.endereco,
        segmento: data.segmento,
        vigencia: data.vigencia,
        datavigencia: data.datavigencia,
        usuario: data.usuario,
        senha: novasenha,
        contacesso: 0
      }
    })
    return usuarioCriado
  }

  async update(data: IUsuarioDTO) {
    const usuarioAtualizado = await prisma.associados.update({ 
      where: {id: data.id },
      data: {
        nome: data.nome,
        email: data.email,
        tipo: data.tipo,
        categoria: data.categoria,
        celular: data.celular,
        cpfcnpj: data.cpfcnpj,
        razaosocial: data.razaosocial,
        nomeparceiro: data.nomeparceiro,
        codparc: data.codparc,
        emitecartao: data.emitecartao,
        situacao: data.situacao,
        endereco: data.endereco,
        segmento: data.segmento,
        vigencia: data.vigencia,
        datavigencia: data.datavigencia,
        usuario: data.usuario,
        senha: data.senha,
      },
    })
    return usuarioAtualizado;
  }

  async updatePassword(userId: number, newPassword: string) {
    await prisma.associados.update({
      where: { id: userId},
      data: { senha: newPassword }
    })
  }

  async delete(id: number) {
    await prisma.associados.delete({
      where: {id: Number(id) },
    })
  }

}