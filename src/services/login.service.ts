import { IUsuarioDTO } from "../dto/usuario.dto"
import { UsuarioRepository } from "../repositories/usuario.repository"
import { verifyPassword } from "../utils/authenticate"

const usuarioRepository = new UsuarioRepository()

export async function LoginService(nomeusuario: string, senha: string) {
  const usuario:IUsuarioDTO | null = await usuarioRepository.findByUserName(nomeusuario)
  let statusLogin = 0
  let messageLogin = ''
  if (usuario) {
    const loggedUser = await verifyPassword(senha, usuario.senha)
    if (loggedUser) {
      statusLogin = 200
      messageLogin = 'Usuário logado com sucesso!'
    } else {
      statusLogin = 401
      messageLogin = 'Usuário ou Senha inválidos'
    }
  } else {
    statusLogin = 404
    messageLogin = 'Usuário não encontrado.'
  }
  return { statusLogin, messageLogin }
}