import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ItemTamanho } from '../../../models/itemTamanho';
import { Produto } from '../../../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produto: Produto;

  constructor(private firestore: AngularFirestore) { }

  getProdutos() {
    return this.firestore.collection('produtos').snapshotChanges();
  }
  createProduto(produto: Produto) {
    return this.firestore.collection('produtos').add(produto);
  }
  updateProduto(produto: Produto) {
    delete produto.id;
    this.firestore.doc('produtos/' + produto.id).update(produto);
  }
  deleteProduto(produtoId: string) {
    this.firestore.doc('produtos/' + produtoId).delete();
  }

  get tamanhoSelecionado(): ItemTamanho { return this.produto._tamanhoSelecionado; }

  set tamanhoSelecionado(item: ItemTamanho) {
    this.produto._tamanhoSelecionado = item;
  }

  get totalEstoque() {
    let estoque = 0;
    for (const tamanho of this.produto.tamanhos) {
      estoque += tamanho.estoque;
    }
    return estoque;
  }

  findTamanho(nome: string) {
    try {
      return this.produto.tamanhos.map((x) => {
        // tslint:disable-next-line: no-unused-expression
        x.nome === nome;
      });
    } catch (e) {
      return null;
    }
  }

  get precoBase() {
    let menorPreco = Number.MAX_VALUE;
    for (const tamanho of this.produto.tamanhos) {
      if (tamanho.preco < menorPreco) {
        menorPreco = tamanho.preco;
      }
    }
    return menorPreco;
  }

  clone(produto: Produto) {
    const newProduto: Produto = {
      id: produto.id,
      nome: produto.nome,
      descricao: produto.descricao,
      imagens: produto.imagens,
      //tamanhos: produto.tamanhos.map((tamanho) => tamanho.clone()).toList(),
      novasImagens: produto.novasImagens,
      _tamanhoSelecionado: produto._tamanhoSelecionado,
      tamanhos: produto.tamanhos,
      deletado: produto.deletado
    };
    return newProduto;
  }

}

