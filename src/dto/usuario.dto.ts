export interface IUsuarioDTO {
  id: number;
  nome:string;
  email: string;
  tipo: number;
  categoria: number;
  celular: string;
  cpfcnpj: string;
  razaosocial: string;
  nomeparceiro: string;
  codparc: number;
  emitecartao: boolean;
  situacao: string;
  endereco: string;
  segmento: string;
  vigencia: string;
  datavigencia: Date;
  usuario: string;
  senha: string;
  contacesso: number;
  ultimoacesso: Date;
}