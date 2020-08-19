import { SecaoItem } from './secao-item';
export class Secao {
    id: string;
    nome: string;
    tipo: string;
    itens: SecaoItem[];
    itensOriginais: SecaoItem[];
}
