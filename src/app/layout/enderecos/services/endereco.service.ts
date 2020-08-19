import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Endereco } from '../../../models/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private firestore: AngularFirestore) { }

  getEnderecos() {
    return this.firestore.collection('users').snapshotChanges();
  }
  createEndereco(endereco: Endereco) {
    return this.firestore.collection('users').add(endereco);
  }
  updateEndereco(endereco: Endereco) {
    delete endereco.clienteId;
    this.firestore.doc('users/' + endereco.clienteId).update(endereco);
  }
  deleteEndereco(enderecoId: string) {
    this.firestore.doc('users/' + enderecoId).delete();
  }
}

