interface IAdress {
  email: string;
  nome: string;
}

interface IMessage {
  to: IAdress;
  from: IAdress;
  subject: string;
  body: string;
}

export interface IMailService {
  sendMail(message: IMessage): Promise<void>;
}