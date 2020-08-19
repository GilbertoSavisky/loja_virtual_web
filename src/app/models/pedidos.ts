import { Time } from '@angular/common';
import { Carrinho } from './carrinho';
import { Endereco } from './endereco';
export class Pedido {
    payId: string;
    orderId: string;
    userId: string;
    preco: number;
    endereco: Endereco;
    data: Time;
    status: Status;
    items: Carrinho[];
}

enum Status { CANCELADO, PREPARANDO, TRANSPORTANDO, ENTREGUE }
