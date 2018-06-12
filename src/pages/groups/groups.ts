import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FirebaseService } from '../../services/firebase.service';
import * as _ from 'lodash';
import * as moment from 'moment';
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage implements OnInit {

  userId: any;
  groups: any;
  userSelection: any;
  userSelectionId: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseService, private params: NavParams, private auth: AuthService, private view: ViewController) {
    if (params.get('userId')) {
      this.userId = params.get('userId');
    } else {
      this.userId = auth.getUserId();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsPage');
  }

  ngOnInit(): void {
    this.firebaseService.getUserSelection(this.userId).subscribe(data => {
      if (data.length > 0) {
        // modify the groups to match the selections
        this.groups = data[0]['groups'];
        this.userSelectionId = data[0]['id'];
      } else {
        this.firebaseService.getGroups().subscribe(data => {
          this.groups = data;
        });
      }
    });

  }

  reorderItems(group, indexes) {
    let wcGroup = _.find(this.groups, (g) => {
      return group.name === g['name'];
    })
    if (wcGroup) {
      let element = wcGroup['teams'][indexes.from];
      wcGroup['teams'].splice(indexes.from, 1);
      wcGroup['teams'].splice(indexes.to, 0, element);
    }

  }

  makeSelection() {
    this.firebaseService.saveUserGroupSelection(this.groups, this.userSelectionId);
  }

  canChange() {
    return moment().unix() <= moment('2018-06-14 09:00:00-0600').unix();
  }

  isCurrentUser() {
    return this.userId === this.auth.getUserId();
  }

  dismiss() {
    this.view.dismiss();
  }

}
