export interface ITipoUsuario {
  id: number;
  tipo: string;
}

export interface ICategoriaUsuario {
  id: number;
  descricao: string;
}

export interface IUsuario {
  id: number;
  nome:string;
  email: string;
  categoria: string;
  celular: string;
  cnpj_cpf: string;
  codparc: number;
  emite_cartao: boolean;
  situacao: string;
}

export interface ISegmentoConvenio {
}

export interface IConvenio {
}  

export interface ITipoSituacao {
}

export interface ITipoVigencia {
}