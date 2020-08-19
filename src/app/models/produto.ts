import { ItemTamanho } from './itemTamanho';
export class Produto {
    id: string;
    nome: string;
    descricao: string;
    imagens: string[];
    novasImagens: string[];
    deletado: boolean;
    _tamanhoSelecionado: ItemTamanho;
    tamanhos: ItemTamanho[];
}
