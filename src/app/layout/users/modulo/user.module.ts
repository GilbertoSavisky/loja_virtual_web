/* tslint:disable: ordered-imports*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserEditarComponent } from '../containers/user-editar/user-editar.component';
import { UserListarComponent } from '../containers/user-listar/user-listar.component';
import { UserVisualizarComponent } from '../containers/user-visualizar/user-visualizar.component';
import { UserRoutingModule } from '../router/user-routing.module';
import { UserService } from '../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    UserRoutingModule,

  ],
  declarations: [
    UserListarComponent,
    UserEditarComponent,
    UserVisualizarComponent
  ],

  providers: [UserService],

})
export class UserModule { }
