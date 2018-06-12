import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { Observable } from 'rxjs';

export class User {
  public id: string;
  public name: string;
  public email: string;
}

@Injectable()
export class AuthService {
  private user: firebase.User;
  private currentUser: AngularFirestoreDocument<User>;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {
    afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  signInWithEmail(credentials) {
    console.log('Sign in with email');
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(data => {
      this.upsert(data['user']['uid']);
    });
  }

  signUp(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  getUserId(): string {
    return this.user.uid;
  }

  getEmail() {
    return this.user && this.user.email;
  }

  getDisplayName() {
    return this.user.displayName;
  }

  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  signInWithGoogle() {
    console.log('Sign in with google');
    return this.oauthSignIn(new firebase.auth.GoogleAuthProvider()).then(data => {
      //check if the user e
      this.upsert(data['user']['uid']);
    });
  }

  upsert(id) {
    const self = this;
    this.currentUser = this.afs.doc('users/' + id);
    this.currentUser.valueChanges().subscribe(data => {
      if (!data) {
        this.afs.collection('users').doc(self.user.uid).set({
          name: self.user['displayName'],
          email: self.user['email']
        });
      } else {
        this.currentUser.update({
          id: self.user['uid'],
          name: self.user['displayName'],
          email: self.user['email']
        })
      }
    });
  }

  private oauthSignIn(provider: AuthProvider) {
    if (!(<any>window).cordova) {
      return this.afAuth.auth.signInWithPopup(provider);
    } else {
      return this.afAuth.auth.signInWithRedirect(provider)
        .then(() => {
          return this.afAuth.auth.getRedirectResult().then(result => {
            // This gives you a Google Access Token.
            // You can use it to access the Google API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
            console.log(token, user);
          }).catch(function (error) {
            // Handle Errors here.
            alert(error.message);
          });
        });
    }
  }

}
