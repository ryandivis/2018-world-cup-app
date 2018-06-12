import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { PouchDbItem } from '../models/pouchdb-item.model';

@Component({
	templateUrl: 'pouchdb-crud.edit.html'
})
export class PouchDbCrudEditPage {
	private viewCtrl: ViewController;
	public item: PouchDbItem;

	constructor(viewCtrl: ViewController, params: NavParams) {
		this.viewCtrl = viewCtrl;
		this.item = params.data._id ? params.data : new PouchDbItem();
	}

	close() {
		this.viewCtrl.dismiss();
	}

	save() {
		this.viewCtrl.dismiss(this.item);
	}
}
