import { Component, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { ModalController } from 'ionic-angular';
import { SignatureConfirmationModal } from './signature-confirmation.modal';

@Component({
	templateUrl: 'signature.html',
	selector: 'page-signature'
})
export class SignaturePage {
	isDrawing = false;

	@ViewChild(SignaturePad) signaturePad: SignaturePad;

	signaturePadOptions: any = { // Check out https://github.com/szimek/signature_pad
		'minWidth': 2,
		'canvasHeight': 200,
		'canvasWidth': 400,
		'backgroundColor': '#f6fbff',
		'penColor': '#666a73'
	};

	constructor(private modalCtrl: ModalController) {
	}

	ionViewDidEnter() {
		this.signaturePad.clear();
	}

	drawComplete() {
		this.isDrawing = false;
	}

	drawStart() {
		this.isDrawing = true;
	}

	submit() {
		let signature = this.signaturePad.toDataURL();
		this.signaturePad.clear();

		let profileModal = this.modalCtrl.create(SignatureConfirmationModal, { signature: signature });
		profileModal.present();
	}

	clearPad() {
		this.signaturePad.clear();
	}
}
