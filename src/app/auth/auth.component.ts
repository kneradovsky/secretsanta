import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user : Observable<firebase.User>;

  authenticated = false;
  inAuthState = false;
  error = '';
  email = '';
  password = '';
  firstname = '';
  lastname = '';
  constructor(public afAuth : AngularFireAuth, public afDb : AngularFireDatabase) { 
    this.user = this.afAuth.authState;
    var self = this;
    this.user.subscribe(state => {
      self.authenticated = state!=null;
      self.inAuthState = false;
      console.log(state);
    },error => {
      self.inAuthState = false;
      self.authenticated = false;
      self.error = error;
      console.log(error)
    })
  }

  ngOnInit() {
  }

  Login() {
    this.inAuthState = true;
    this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password);
  }

  Register() {
    this.inAuthState = true;
    const self = this;
    this.afAuth.auth.createUserWithEmailAndPassword(this.email,this.password).then(newuser => {
      self.afDb.database.ref(`/users/${newuser.uid}`).update({firstname: self.firstname, lastname: self.lastname});
    })
  }
 }
