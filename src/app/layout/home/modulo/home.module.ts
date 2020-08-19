/* tslint:disable: ordered-imports*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../../shared/modules/stat/stat.module';
import { HomeListComponent } from '../containers/home-list/home-list.component';
import { HomeRoutingModule } from '../router/home-routing.module';
import { HomeService } from '../services/home.service';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    HomeRoutingModule,
    StatModule

  ],
  declarations: [
    HomeListComponent,
  ],

  providers: [HomeService],

})
export class HomeModule { }
