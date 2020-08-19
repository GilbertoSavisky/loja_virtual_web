import { Produto } from './produto';

export class Carrinho {
    id: string;
    produtoId: string;
    tamanho: string;
    quantidade: number;
    fixedPreco: number;

    _produto: Produto;
}
