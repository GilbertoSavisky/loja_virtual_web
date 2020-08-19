import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditarComponent } from '../containers/user-editar/user-editar.component';
import { UserListarComponent } from '../containers/user-listar/user-listar.component';
import { UserVisualizarComponent } from '../containers/user-visualizar/user-visualizar.component';


/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'user',
    },
    {
        path: 'listar',
        canActivate: [],
        component: UserListarComponent,
        data: {
            title: 'user',
        },
    },
    {
        path: 'editar',
        canActivate: [],
        component: UserEditarComponent,
        data: {
            title: 'user',
        },
    },
    {
        path: 'visualizar',
        canActivate: [],
        component: UserVisualizarComponent,
        data: {
            title: 'user',
        },
    },
    {
        path: 'endereco',
        loadChildren: () => import('../../enderecos/modulo/endereco.module').then((m) => m.EnderecoModule)
    },


];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class UserRoutingModule { }
