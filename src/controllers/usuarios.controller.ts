import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { IUsuarioDTO } from "../dto/usuario.dto";
import { UsuarioRepository } from "../repositories/usuario.repository";
import { IMailService } from "../services/email.service";
import { LoginService } from "../services/login.service";

export class UsuarioController {
  constructor(
    private usuarioRepository: UsuarioRepository,
    private mailService: IMailService
  ) {}
  // private usuarioRepository = new UsuarioRepository()

  async list(req: Request, res: Response) {
    try {
      const usuarios: IUsuarioDTO[] = await this.usuarioRepository.list()
      res.status(200).json(usuarios)
    } catch (error) {
      console.log(error)
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { nomeusuario, senha } = req.body
      const { statusLogin, messageLogin } = await LoginService(nomeusuario, senha)
      res.status(statusLogin).json({ message: messageLogin })
    } catch (error) {
      console.log(error)
    }
  }

  async create(req: Request, res: Response) {
    const data:IUsuarioDTO = req.body
    const usuario = await this.usuarioRepository.save(data)
    if (usuario) {
      // this.mailService.sendMail({
      //   to: {
      //     nome: usuario.nomeparceiro,
      //     email: usuario.email
      //   },
      //   from: {
      //     nome: 'VABEN - CDL',
      //     email: 'ti.cdl@cdlanapolis.com.br'
      //   },
      //   subject: 'Seja bem-vindo ao sistema de Validação de Beneficios',
      //   body: `<p>Voce ja pode fazer login usando usuario ${usuario.usuario} e senha ${usuario.senha}.</p>`
      // })
    }
    res.status(200).send('E-mail enviado com sucesso')
  }
 
  async update(req: Request, res: Response) {
    const data: IUsuarioDTO = req.body
    const usuario = await this.usuarioRepository.update(data)
    res.status(200).json(usuario)
  }
  
  async updatePassword(req: Request, res: Response) {
    const userId = req.params.id;
    const { currentPassword, newPassword } = req.body;
    try {
      if (!currentPassword || !newPassword) {
          res.status(400).send({ error: 'Senhas são obrigatórias.' });
      }
      const user = await this.usuarioRepository.findById(Number(userId))
      if (!user) {
          res.status(404).send({ error: 'Usuário não encontrado.' });
      } else {
        const isMatch = await bcrypt.compare(currentPassword, user.senha);
        if (!isMatch) {
          res.status(401).send({ error: 'Senha atual está incorreta.' });
        }
      }
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await this.usuarioRepository.updatePassword(Number(userId), hashedPassword)
      res.status(200).send({ message: 'Senha atualizada com sucesso.' });
    } catch(error) {
      res.status(100).send()
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params
    await this.usuarioRepository.delete(Number(id))
    res.status(200).send('Usuario excluido com sucesso.')
  }

}