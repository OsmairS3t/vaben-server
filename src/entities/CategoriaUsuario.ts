export class CategoriaUsuario {
  public readonly id!: number;
  public descricao!: string;

  constructor(props: Omit<CategoriaUsuario, 'id'>) {
    Object.assign(this, props)
  }
}