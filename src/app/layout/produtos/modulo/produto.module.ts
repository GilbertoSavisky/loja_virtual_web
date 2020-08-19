/* tslint:disable: ordered-imports*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProdutoEditarComponent } from '../containers/produto-editar/produto-editar.component';
import { ProdutoListarComponent } from '../containers/produto-listar/produto-listar.component';
import { ProdutoVisualizarComponent } from '../containers/produto-visualizar/produto-visualizar.component';
import { ProdutoRoutingModule } from '../router/produto-routing.module';
import { ProdutoService } from '../services/produto.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ProdutoRoutingModule
  ],
  declarations: [
    ProdutoListarComponent,
    ProdutoEditarComponent,
    ProdutoVisualizarComponent
  ],

  providers: [ProdutoService],

})
export class ProdutoModule { }
