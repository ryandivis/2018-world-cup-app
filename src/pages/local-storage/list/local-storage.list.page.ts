import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { LocalStorageService } from '../local-storage.service';
import { LocalStorageItem } from '../models/local-storage-item.model';
import { LocalStorageEditPage } from '../edit/local-storage.edit.page';

@Component({
	templateUrl: 'local-storage.list.html',
	providers: [LocalStorageService]
})
export class LocalStorageListPage implements OnInit {
	private service: LocalStorageService;
	private modalController: ModalController;

	public items: LocalStorageItem[];

	constructor(service: LocalStorageService, modalController: ModalController) {
		this.service = service;
		this.modalController = modalController;
	}

	ngOnInit(): void {
		this.loadItems();
	}

	addItem() {
		let modal = this.modalController.create(LocalStorageEditPage);
		modal.onDidDismiss(item => {
			if (!item) {
				return;
			}
			this.service.addItem(item);
			this.loadItems();
		});
		modal.present();
	}

	private loadItems() {
		this.items = this.service.getItems();
	}

	editItem(item) {
		let modal = this.modalController.create(LocalStorageEditPage, item);
		modal.onDidDismiss(changedItem => {
			if (!changedItem) {
				return;
			}
			this.service.updateItem(changedItem);
			this.loadItems();
		});
		modal.present();
	}

	deleteItem(id) {
		this.service.deleteItem(id);
		this.loadItems();
	}
}
