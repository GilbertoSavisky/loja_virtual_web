import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { UserAuth } from '../../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Salvando dados do usuário no armazenamento local quando
logado e configurando nulo quando desconectado */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || 'null');
      } else {
        localStorage.setItem('user', '');
        JSON.parse(localStorage.getItem('user') || 'null');
      }
    });
  }

  // Entrar com e-mail / senha
  login(user: any) {
    return this.afAuth
      .signInWithEmailAndPassword(user.value.email, user.value.senha)
      .then(async result => {
        await this.ngZone.run(async () => {
          localStorage.setItem('user', JSON.stringify(result.user));
          await this.router.navigate(['dashboard']);
        });
        this.SetUserData(result.user);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }

  // Inscreva-se com e-mail / senha
  registrar(user: any) {
    return this.afAuth
      .createUserWithEmailAndPassword(user.email, user.senha)
      .then(result => {
        /* Chame a função SendVerificaitonMail () quando um novo usuário assinar up e retorna promessa */
        this.enviarEmailVerificacao();
        this.SetUserData(result.user);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }

  // Enviar verificação de email quando um novo usuário se inscrever
  enviarEmailVerificacao() {
    return this.afAuth.currentUser
      .then(u => u?.sendEmailVerification())
      .then(() => {
        this.router.navigate(['auth/verificar-email']);
      });
  }

  // Redefinir Esqueceu a senha
  esqueceuSenha(passwordResetEmail: any) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          'E-mail de redefinição de senha enviado, verifique sua caixa de entrada.'
        );
      })
      .catch(error => {
        window.alert(error);
      });
  }

  // Retorna true quando o usuário está conectado e o email é verificado
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    console.log('isLoggedIn = ', user);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Lógica de autenticação para executar provedores de autenticação
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then(result => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.SetUserData(result.user);
      })
      .catch(error => {
        window.alert(error);
      });
  }

  /* Configurando dados do usuário ao fazer login com nome de usuário / senha,
inscreva-se com nome de usuário / senha e entre com autenticação social
no banco de dados Firestore usando o serviço AngularFirestore + AngularFirestoreDocument */
  SetUserData(user: any) {
    console.log('--------user------', user);
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user?.uid}`);
    const userData: UserAuth = {
      id: user.uid,
      email: user.email,
      nome: user.displayName,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // Sign out
  deslogar() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['auth/login']);
    });
  }
}
