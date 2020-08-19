import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../../models/produto';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.scss']
})
export class ProdutoListarComponent implements OnInit {

  todosProdutos: Produto[];
  _pesquisa = '';

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(data => {
      this.todosProdutos = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Produto
        };
      });
      //console.log('produto = ', this.todosProdutos[0].tamanhos);
    });
  }

  create(produto: Produto) {
    this.produtoService.createProduto(produto);
  }

  update(produto: Produto) {
    this.produtoService.updateProduto(produto);
  }

  delete(id: string) {
    this.produtoService.deleteProduto(id);
  }

  get pesquisa() {
    return this._pesquisa;
  }

  set pesquisa(valor: string) {
    this._pesquisa = valor;
  }

  // tslint:disable-next-line: no-shadowed-variable
  produtosFiltrados() {
    let produtosFiltrados = [];

    if (this.pesquisa === '') {
      produtosFiltrados.push(this.todosProdutos);
      console.log('todos = ', this.todosProdutos);
    } else {
      this.todosProdutos.map((p) => {
        if (p.nome.toLocaleLowerCase().includes(this.pesquisa.toLocaleLowerCase())) {
          produtosFiltrados.push(p);
        }
      });
      console.log('filtrados = ', produtosFiltrados);
      return produtosFiltrados;
    }
  }

  findProdutoById(id: string) {
    console.log(id);
    try {
      let x = this.todosProdutos.map((element) => element.id === id);
      console.log(x);
      return x;
    } catch (e) {
      return null;
    }
  }


}
