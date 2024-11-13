export interface ITipoUsuario {
  id: number;
  descricao: string;
}

export interface ICategoriaUsuario {
  id: number;
  descricao: string;
}

export interface IUsuario {
  id: number;
  nomeusuario: string;
  senha: string;
  contacesso: number;
  ultimoacesso: Date;
}

export interface IAssociado {
  id: number;
  nome:string;
  email: string;
  tipo: number;
  categoria: number;
  celular: string;
  cpfcnpj: string;
  razaosocial: string;
  nomefantasia: string;
  codparc: number;
  emitecartao: boolean;
  situacao: string;
  endereco: string;
  segmento: string;
  vigencia: string;
  datavigencia: Date;
}

export interface IBeneficiario {
  id: number;
  codassociado: number;
  nome: string;
  categoria: number;
}

export interface ISegmentoConvenio {
  id: number;
  descricao: string;
}

export interface IConvenio {
  id: number;
  segmento: string;
}  

export interface ITipoSituacao {
  id: number;
  descricao: string;
}

export interface ITipoVigencia {
  id: number;
  descricao: string;
}