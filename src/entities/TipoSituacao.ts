export class TipoSituacao {
  public readonly id!: number;
  public descricao!: string;

  constructor(props: Omit<TipoSituacao, 'id'>) {
    Object.assign(this, props)
  }
}