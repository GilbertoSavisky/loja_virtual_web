import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeListComponent } from '../containers/home-list/home-list.component';


/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
    },
    {
        path: '',
        canActivate: [],
        component: HomeListComponent,
        data: {
            title: 'home',
        },
    },

];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
