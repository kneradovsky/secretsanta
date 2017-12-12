import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { errorHandler } from '@angular/platform-browser/src/browser';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @Input() phaseNum : string;

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
    })
  }

  ngOnInit() {
  }


  Login() {
    this.inAuthState = true;
    var self = this;
    this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password).catch(error => self.ErrorHander(error));
  }

  Register() {
    this.inAuthState = true;
    const self = this;
    this.afAuth.auth.createUserWithEmailAndPassword(this.email,this.password).then(newuser => {
      self.afDb.database.ref(`/users/${newuser.uid}`).update({firstname: self.firstname, lastname: self.lastname});
    }).catch(error => self.ErrorHander(error))
  }

  ErrorHander(error) {
    this.error = error.message;
    console.log(this.error)
  }

 }
