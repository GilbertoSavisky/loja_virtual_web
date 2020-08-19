import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnderecoListComponent } from '../containers/endereco-list/endereco-list.component';


/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'endereco',
    },
    {
        path: '',
        canActivate: [],
        component: EnderecoListComponent,
        data: {
            title: 'endereco',
        },
    },

];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class EnderecoRoutingModule { }
