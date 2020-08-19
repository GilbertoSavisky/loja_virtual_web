import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoEditarComponent } from '../containers/produto-editar/produto-editar.component';
import { ProdutoListarComponent } from '../containers/produto-listar/produto-listar.component';
import { ProdutoVisualizarComponent } from '../containers/produto-visualizar/produto-visualizar.component';


/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'produtos',
    },
    {
        path: 'listar',
        canActivate: [],
        component: ProdutoListarComponent,
        data: {
            title: 'Produtos',
        },
    },
    {
        path: 'visualizar',
        canActivate: [],
        component: ProdutoVisualizarComponent,
        data: {
            title: 'Produtos',
        },
    }, {
        path: 'editar',
        canActivate: [],
        component: ProdutoEditarComponent,
        data: {
            title: 'Produtos',
        },
    },

];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ProdutoRoutingModule { }
