import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as _ from 'lodash';
import * as moment from 'moment';
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the MatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matches',
  templateUrl: 'matches.html',
})
export class MatchesPage implements OnInit {

  matchSelection: any = {};
  matchSelectionId: string = null;
  matches;
  userId;

  constructor(public navCtrl: NavController, public params: NavParams, public firebaseService: FirebaseService, private auth: AuthService, private view: ViewController) {
    if (params.get('userId')) {
      this.userId = params.get('userId');
    } else {
      this.userId = auth.getUserId();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchesPage');
  }

  ngOnInit() {
    this.matches = this.firebaseService.getMatches();
    this.firebaseService.getUserMatchSelection(this.userId).subscribe(data => {
      if (data && data.length > 0) {
        this.matchSelectionId = data[0]['id'];
        this.matchSelection = data[0]['matches'];
      }
    });
  }

  makeSelection() {
    this.firebaseService.saveUserMatchSelection(this.matchSelection, this.matchSelectionId);
  }

  inThePast(date) {
    return !this.isCurrentUser() || (moment(date).unix() < moment().unix());
  }

  isCurrentUser() {
    return this.userId === this.auth.getUserId();
  }

  dismiss() {
    this.view.dismiss();
  }

}
