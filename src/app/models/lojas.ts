import { Time } from '@angular/common';
import { Endereco } from './endereco';
export class Loja {
    nome: string;
    imagem: string;
    telefone: string;
    endereco: Endereco;
    operando: Time;
    status: LojaStatus;
}

enum LojaStatus { FECHADA, ABERTA, FECHANDO }
