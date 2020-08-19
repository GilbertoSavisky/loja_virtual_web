import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-esqueci-a-senha',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './esqueci-a-senha.component.html',
    styleUrls: ['esqueci-a-senha.component.scss'],
})
export class EsqueciSenhaComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
