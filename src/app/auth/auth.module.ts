import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { EsqueciSenhaComponent } from './containers/esqueci-a-senha/esqueci-a-senha.component';
import { LoginComponent } from './containers/login/login.component';
import { RegistrarComponent } from './containers/registrar/registrar.component';
import { VerificarEmailComponent } from './containers/verificar-email/verificar-email.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';


@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: [
        RegistrarComponent,
        LoginComponent,
        EsqueciSenhaComponent,
        VerificarEmailComponent
    ],
    providers: [AuthGuard, AuthService]
})
export class AuthModule { }
