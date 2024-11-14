import { ICriarUsuarioDTO } from "dto/usuario.dto";
import { Usuario } from "entities/Usuario";
import { IUsuarioRepository } from "repositories/IUsuarioRepository";
import { IMailService } from "services/email.service";

export class UsuarioController {
  constructor(
    private usuarioRepository: IUsuarioRepository,
    private mailService: IMailService
  ) {}

  async execute(data: ICriarUsuarioDTO) {
    const usuarioExiste = await this.usuarioRepository.findByName(data.nomeusuario)
    if(usuarioExiste) {
      throw new Error('Usuario ja existe')
    }
    const usuario = new Usuario(data)
    await this.usuarioRepository.save(usuario)
    this.mailService.sendMail({
      to: {
        nome: 'Nome da pessoa',
        email: 'email@provider.com'
      },
      from: {
        nome: 'Nome origem',
        email: 'emailorigen@provide.com'
      },
      subject: 'Seja bem-vindo ao sistema',
      body: '<p>Voce ja pode fazer login usando usuario xxx e senha xxx.</p>'
    })
  }
}