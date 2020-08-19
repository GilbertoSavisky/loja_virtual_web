import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-registrar',
    templateUrl: './registrar.component.html',
    styleUrls: ['./registrar.component.scss'],
    animations: [routerTransition()]
})
export class RegistrarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
