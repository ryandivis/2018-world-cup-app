import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';
import { ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { FirebaseCrudEditPage } from '../edit/firebase-crud.edit.page';

import { FirebaseCrudService } from '../firebase-crud.service';
import { FirebaseItem } from '../models/firebase-item.model';

@Component({
	templateUrl: 'firebase-crud.list.html'
})
export class FirebaseCrudListPage implements OnInit {
	list: AngularFireList<FirebaseItem>;
	items: Observable<FirebaseItem[]>;

	constructor(private service: FirebaseCrudService, private modalController: ModalController) {
	}

	ngOnInit(): void {
		this.list = this.service.getItems();
		this.items = this.list.snapshotChanges().map(items =>
			items.map(item => ({ key: item.key, ...item.payload.val() }))
		)
	}

	addItem() {
		let modal = this.modalController.create(FirebaseCrudEditPage);
		modal.onDidDismiss(item => {
			if (!item) {
				return;
			}
			this.list.push(item);
		});
		modal.present();
	}

	editItem(item) {
		let modal = this.modalController.create(FirebaseCrudEditPage, item);
		modal.onDidDismiss(changedItem => {
			if (!changedItem) {
				return;
			}

			this.list.update(item.key, {
				title: changedItem.title,
				teaser: changedItem.teaser
			});
		});
		modal.present();
	}

	deleteItem(item) {
		this.list.remove(item.key);
	}
}
