export class Usuario {
  public readonly id: number;

  public nomeusuario: string;
  public senha: string;
  public contacesso: number;
  public ultimoacesso: Date;

  constructor(props: Omit<Usuario, 'id'>) {
    Object.assign(this, props);
  }
}