export class TipoVigencia {
  public readonly id!: number;
  public descricao!: string;

  constructor(props: Omit<TipoVigencia, 'id'>) {
    Object.assign(this, props)
  }
}