import { Usuario } from "entities/Usuario";

export interface IUsuarioRepository {
  findByName(email: string): Promise<Usuario>;
  save(usuario: Usuario): Promise<void>;
}