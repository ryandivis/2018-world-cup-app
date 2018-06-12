import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { FirebaseItem } from '../models/firebase-item.model';

@Component({
	templateUrl: 'firebase-crud.edit.html'
})
export class FirebaseCrudEditPage {
	private viewCtrl: ViewController;
	public item: FirebaseItem;

	constructor(viewCtrl: ViewController, params: NavParams) {
		this.viewCtrl = viewCtrl;
		this.item = params.data.key ? params.data : new FirebaseItem();
	}

	close() {
		this.viewCtrl.dismiss();
	}

	save() {
		this.viewCtrl.dismiss(this.item);
	}
}
