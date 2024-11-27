export class Beneficiario {
  public readonly id!: number;

  public codassociado!: number;
  public nome!: string;
  public categoria!: number;

  constructor(props: Omit<Beneficiario, 'id'>) {
    Object.assign(this, props)
  }
}