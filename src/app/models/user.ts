import { Endereco } from './endereco';

export class User {
    id: string;
    nome: string;
    email: string;
    senha: string;
    cpf: string;
    confirmSenha: string;
    admin = false;
    endereco: Endereco;
}
