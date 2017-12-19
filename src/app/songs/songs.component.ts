import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { List } from 'lodash';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  auser : Observable<firebase.User>;
  songs : any[];
  user : any;
  inLoadingState = true;
  authenticated = false;
  error: string = "";
  newSong : string = "";

  constructor(private afAuth : AngularFireAuth, private afDb : AngularFireDatabase) { 
    afDb.list("/songs").valueChanges().subscribe(songslist => this.songs=songslist);
  }

  errorHandler(error) {
    this.error=error;
    console.log(error);
  }
  ngOnInit() {
    this.inLoadingState=true;
    this.authenticated=false;
    this.auser = this.afAuth.authState;
    const self = this;
    this.auser.subscribe(ruser => {
      self.authenticated=ruser!=null;
      if(!self.authenticated) return;
      self.afDb.object(`/users/${ruser.uid}`).valueChanges().subscribe(user => {
        console.log(user);
        self.inLoadingState=false;
        self.user = user;
      },error => self.errorHandler(error))
    },error => self.errorHandler(error))
  }
  
  addSong() {
    console.log(this.songs);
    if(this.newSong!="")  {
      if(this.songs.find(s => s.song==this.newSong) === undefined)
        this.afDb.list("/songs").push({performer: `${this.user.firstname} ${this.user.lastname}`,song: this.newSong});
      else 
        this.error = `Песня ${this.newSong} уже занята`;
    } 
  }

}
