import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phaseNum = 1;
  phaseName = 'Регистрация';

  constructor(private afAuth : AngularFireAuth) {}
  
  Logout() {
    this.afAuth.auth.signOut();
  }

  
}
