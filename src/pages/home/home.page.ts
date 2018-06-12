import { AuthService } from './../../services/auth.service';
import { MatchesPage } from './../matches/matches';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Nav, ModalController } from 'ionic-angular';
import { GroupsPage } from '../groups/groups';
import * as _ from 'lodash';


@Component({
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  users: any;

  private nav: Nav;

  constructor(
    nav: Nav,
    private firebaseService: FirebaseService,
    private modalCtrl: ModalController,
    private auth: AuthService
  ) {
    this.nav = nav;
  }

  ngOnInit() {
    this.users = this.firebaseService.getUsers();
  }

  viewGroups(user) {
    const userId = user ? user.id : this.auth.getUserId();
    const modal = this.modalCtrl.create(GroupsPage, { userId: userId});
    modal.present();
  }

  viewMatches(user) {
    const userId = user ? user.id : this.auth.getUserId();
    const modal = this.modalCtrl.create(MatchesPage, { userId: userId });
    modal.present();
  }


}
