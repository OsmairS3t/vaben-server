export class SegmentoConvenio {
  public readonly id!: number;
  public descricao!: string;

  constructor(props: Omit<SegmentoConvenio, 'id'>) {
    Object.assign(this, props)
  }
}