import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../../models/produto';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-visualizar',
  templateUrl: './produto-visualizar.component.html',
  styleUrls: ['./produto-visualizar.component.scss']
})
export class ProdutoVisualizarComponent implements OnInit {

  produtos: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(data => {
      this.produtos = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Produto
        };
      });
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

}
