import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-verificar-email',
    templateUrl: './verificar-email.component.html',
    styleUrls: ['./verificar-email.component.scss'],
})
export class VerificarEmailComponent implements OnInit {
    constructor(public authService: AuthService) { }

    ngOnInit() { }
}
