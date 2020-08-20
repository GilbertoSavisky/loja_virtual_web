import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  _produtosFiltrados = [];


  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(data => {
      this.todosProdutos = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Produto
        };
      });
      this._produtosFiltrados = this.todosProdutos;
      // console.log('produto imagem = ', this._produtosFiltrados);
    });
  }

  create(produto: Produto) {
    this.produtoService.createProduto(produto);
  }

  editar(produto: Produto) {
    console.log('--- = ', produto);
    this.router.navigate(['/produtos/editar']);
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
    this._produtosFiltrados = [];
    if (this.pesquisa === '') {
      this._produtosFiltrados = (this.todosProdutos);
      console.log('todos = ', this.todosProdutos);
    } else {
      this.todosProdutos.map((p) => {
        if (p.nome.toLocaleLowerCase().includes(this.pesquisa.toLocaleLowerCase())) {
          this._produtosFiltrados.push(p);
        }
      });
    }
    console.log('filtrados = ', this._produtosFiltrados);
    return this._produtosFiltrados;
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
