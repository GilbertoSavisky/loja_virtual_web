import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Home } from '../../../models/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private firestore: AngularFirestore) { }

  getHomes() {
    return this.firestore.collection('home').snapshotChanges();
  }
  createHome(home: Home) {
    return this.firestore.collection('home').add(home);
  }
  updateHome(home: Home) {
    delete home.id;
    this.firestore.doc('home/' + home.id).update(home);
  }
  deleteHome(homeId: string) {
    this.firestore.doc('home/' + homeId).delete();
  }
}

