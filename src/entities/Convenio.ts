export class Convenio {
  public readonly id!: number;

  public segmento!: string;
  public nome!: string;

  constructor(props: Omit<Convenio, 'id'>) {
    Object.assign(this, props);
  }
}