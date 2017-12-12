import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


class User {
  uid : string;
  firstname : string;
  lastname : string;
  santa : string;
  santauid: string;
  isSanta : boolean;
  email: string;
}

@Component({
  selector: 'app-santa',
  templateUrl: './santa.component.html',
  styleUrls: ['./santa.component.css']
})
export class SantaComponent implements OnInit {
  @Input() phaseNum : string;
  auser : Observable<firebase.User>;
  user : any;
  inLoadingState = true;
  authenticated = false;
  onError = false;
  error: string;

  constructor(public afAuth : AngularFireAuth, public afDb : AngularFireDatabase) { 
    this.auser = afAuth.authState;
    const self = this;
    this.auser.subscribe(auser => {
      self.authenticated=auser!=null;
      if(!self.authenticated) return;
      self.afDb.object(`/users/${auser.uid}`).valueChanges().subscribe(user => {
        console.log(user);
        self.inLoadingState=false;
        self.user = user;
        if(self.user.santa==null || self.user.santa=='') self.user.santa='не назначен';
      },error => self.errorHandler(error))
    },error => self.errorHandler(error))
  }

  errorHandler(error) {
    this.onError=true;
    this.error=error;
    console.log(error);
  }
  ngOnInit() {
    this.inLoadingState=true;
    this.authenticated=false;
  }

  Logout() {
    this.afAuth.auth.signOut();
  }

}
