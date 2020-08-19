/* tslint:disable: ordered-imports*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EnderecoListComponent } from '../containers/endereco-list/endereco-list.component';
import { EnderecoRoutingModule } from '../router/endereco-routing.module';
import { EnderecoService } from '../services/endereco.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    EnderecoRoutingModule,

  ],
  declarations: [
    EnderecoListComponent,
  ],

  providers: [EnderecoService],

})
export class EnderecoModule { }
