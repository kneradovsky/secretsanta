import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SantaComponent } from './santa/santa.component';
import { SongsComponent } from './songs/songs.component';


export const firebaseConfig = {
  apiKey: "AIzaSyAva_-5yLUpqD8_pP3fhEl7gD9RzcHFe1E",
  authDomain: "secretsanta-2018.firebaseapp.com",
  databaseURL: "https://secretsanta-2018.firebaseio.com",
  projectId: "secretsanta-2018",
  storageBucket: "secretsanta-2018.appspot.com",
  messagingSenderId: "442286155863"
};



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SantaComponent,
    SongsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
