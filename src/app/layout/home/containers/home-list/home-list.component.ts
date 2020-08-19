import { Component, OnInit } from '@angular/core';
import { Home } from '../../../../models/home';
import { routerTransition } from '../../../../router.animations';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss'],
  animations: [routerTransition()]
})
export class HomeListComponent implements OnInit {

  homes: Home[];
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];


  constructor(private homeService: HomeService) {
    this.sliders.push(
      {
        imagePath: 'assets/images/slider1.jpg',
        label: 'First slide label',
        text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      },
      {
        imagePath: 'assets/images/slider2.jpg',
        label: 'Second slide label',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        imagePath: 'assets/images/slider3.jpg',
        label: 'Third slide label',
        text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      }
    );

    this.alerts.push(
      {
        id: 1,
        type: 'success',
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptates est animi quibusdam praesentium quam, et perspiciatis,
          consectetur velit culpa molestias dignissimos
          voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
      },
      {
        id: 2,
        type: 'warning',
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptates est animi quibusdam praesentium quam, et perspiciatis,
          consectetur velit culpa molestias dignissimos
          voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
      }
    );
  }

  ngOnInit(): void {
    this.homeService.getHomes().subscribe(data => {
      this.homes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Home
        };
      });
      console.log('home = ', this.homes[0].items[0].produto);
    });
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  create(home: Home) {
    this.homeService.createHome(home);
  }

  update(home: Home) {
    this.homeService.updateHome(home);
  }

  delete(id: string) {
    this.homeService.deleteHome(id);
  }

}
