import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ComponentsListsBasicListPage } from './basic-list/components.lists.basic-list.page';
import { ComponentsListsNoLinesListPage } from './no-lines-list/components.lists.no-lines-list.page';
import { ComponentsListsInsetListPage } from './inset-list/components.lists.inset-list.page';
import { ComponentsListsListDividersPage } from './list-dividers/components.lists.list-dividers.page';
import { ComponentsListsListHeadersPage } from './list-headers/components.lists.list-headers.page';
import { ComponentsListsIconListPage } from './icon-list/components.lists.icon-list.page';
import { ComponentsListsAvatarListPage } from './avatar-list/components.lists.avatar-list.page';
import { ComponentsListsMultiLineListPage } from './multi-line-list/components.lists.multi-line-list.page';
import { ComponentsListsSlidingListPage } from './sliding-list/components.lists.sliding-list.page';
import { ComponentsListsThumbnailListPage } from './thumbnail-list/components.lists.thumbnail-list.page';

@Component({
  templateUrl: 'components.lists-list.html'
})
export class ComponentsListsListPage {
  constructor(
    private navCtrl: NavController
  ) { }

  public basicListTapped() {
    this.navCtrl.push(ComponentsListsBasicListPage);
  }

  public noLinesListTapped() {
    this.navCtrl.push(ComponentsListsNoLinesListPage);
  }

  public insetListTapped() {
    this.navCtrl.push(ComponentsListsInsetListPage);
  }

  public listDividersTapped() {
    this.navCtrl.push(ComponentsListsListDividersPage);
  }

  public listHeadersTapped() {
    this.navCtrl.push(ComponentsListsListHeadersPage);
  }

  public iconListTapped() {
    this.navCtrl.push(ComponentsListsIconListPage);
  }

  public avatarListTapped() {
    this.navCtrl.push(ComponentsListsAvatarListPage);
  }

  public multiLineListTapped() {
    this.navCtrl.push(ComponentsListsMultiLineListPage);
  }

  public slidingListTapped() {
    this.navCtrl.push(ComponentsListsSlidingListPage);
  }

  public thumbnailListTapped() {
    this.navCtrl.push(ComponentsListsThumbnailListPage);
  }
}
