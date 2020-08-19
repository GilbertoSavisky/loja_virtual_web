import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Endereco } from '../../../models/endereco';
import { User } from '../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }
  createUser(user: User) {
    return this.firestore.collection('users').add(user);
  }
  updateUser(user: User) {
    delete user.id;
    this.firestore.doc('users/' + user.id).update(user);
  }
  deleteUser(userId: string) {
    this.firestore.doc('users/' + userId).delete();
  }

  setEndereco(user: User, endereco: Endereco) {
    user.endereco = endereco;
    this.saveData(user);
  }

  setCpf(user: User, cpf: string) {
    user.cpf = cpf;
    this.saveData(user);
  }

  async saveData(user: User) {
    await this.firestore.doc('users/' + user.id).update(user);
  }


}

