import { Component, OnInit } from '@angular/core';
import { Endereco } from '../../../../models/endereco';
import { routerTransition } from '../../../../router.animations';
import { EnderecoService } from '../../services/endereco.service';

@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.component.html',
  styleUrls: ['./endereco-list.component.scss'],
  animations: [routerTransition()]
})
export class EnderecoListComponent implements OnInit {

  enderecos: Endereco[];

  constructor(private enderecoService: EnderecoService) {
  }

  ngOnInit(): void {
    this.enderecoService.getEnderecos().subscribe(data => {
      this.enderecos = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Endereco
        };
      });
    });
  }

  create(endereco: Endereco) {
    this.enderecoService.createEndereco(endereco);
  }

  update(endereco: Endereco) {
    this.enderecoService.updateEndereco(endereco);
  }

  delete(id: string) {
    this.enderecoService.deleteEndereco(id);
  }

}
