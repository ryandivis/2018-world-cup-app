import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { PouchDbCrudService } from '../pouchdb-crud.service';
import { PouchDbItem } from '../models/pouchdb-item.model';
import { PouchDbCrudEditPage } from '../edit/pouchdb-crud.edit.page';

@Component({
	templateUrl: 'pouchdb-crud.list.html',
	providers: [PouchDbCrudService]
})
export class PouchDbCrudListPage implements OnInit {
	items: PouchDbItem[];

	constructor(private service: PouchDbCrudService, private modalController: ModalController) {
	}

	ngOnInit(): void {
		this.service.getItems()
			.then(items => this.items = items);
	}

	addItem() {
		let modal = this.modalController.create(PouchDbCrudEditPage);
		modal.onDidDismiss(item => {
			if (!item) {
				return;
			}
			this.service.addItem({
				title: item.title,
				teaser: item.teaser
			});
		});
		modal.present();
	}

	editItem(item) {
		let modal = this.modalController.create(PouchDbCrudEditPage, item);
		modal.onDidDismiss(changedItem => {
			if (!changedItem) {
				return;
			}
			this.service.updateItem({
				_id: item._id,
				_rev: item._rev,
				title: item.title,
				teaser: item.teaser
			})
		});
		modal.present();
	}

	deleteItem(item) {
		this.service.deleteItem(item);
	}
}
