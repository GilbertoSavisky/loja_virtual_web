import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsqueciSenhaComponent } from './containers/esqueci-a-senha/esqueci-a-senha.component';
import { LoginComponent } from './containers/login/login.component';
import { RegistrarComponent } from './containers/registrar/registrar.component';
import { VerificarEmailComponent } from './containers/verificar-email/verificar-email.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registrar',
        component: RegistrarComponent
    },
    {
        path: 'esqueci-senha',
        component: EsqueciSenhaComponent
    },
    {
        path: 'verificar-email',
        component: VerificarEmailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
