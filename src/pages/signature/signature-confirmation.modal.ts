import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
	templateUrl: './signature-confirmation.html'
})
export class SignatureConfirmationModal {
	signature: string;

	constructor(params: NavParams, private viewCtrl: ViewController) {
		this.signature = params.get('signature');
	}

	close() {
		this.viewCtrl.dismiss();
	}
}