export class TipoUsuario {
  public readonly id!: number;
  public descricao!: string;

  constructor(props: Omit<TipoUsuario, 'id'>) {
    Object.assign(this, props)
  }
}