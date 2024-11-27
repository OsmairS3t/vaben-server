export class Usuario {
  public readonly id!: number;

  public nome!:string;
  public email!: string;
  public tipo!: number;
  public categoria!: number;
  public celular?: string;
  public cpfcnpj?: string;
  public razaosocial?: string;
  public nomeparceiro!: string;
  public codparc!: number;
  public emitecartao?: boolean;
  public situacao?: string;
  public endereco?: string;
  public segmento?: string;
  public vigencia?: string;
  public datavigencia?: Date;
  public usuario!: string;
  public senha!: string;
  public contacesso: number = 0;
  public ultimoacesso?: Date;

  constructor(props: Omit<Usuario, 'id'>) {
    Object.assign(this, props);
  }
}