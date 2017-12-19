import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phaseNum = 2;
  phaseName = 'Санты приготовились!!!';

  constructor(private afAuth : AngularFireAuth) {}
  
  Logout() {
    this.afAuth.auth.signOut();
  }

}
