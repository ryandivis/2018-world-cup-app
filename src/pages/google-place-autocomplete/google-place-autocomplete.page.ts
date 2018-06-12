import {} from '@types/googlemaps';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { AutocompleteComponent } from './place-autocomplete.component';
import PlaceResult = google.maps.places.PlaceResult;

@Component({
	templateUrl: 'google-place-autocomplete.page.html'
})
export class GooglePlaceAutocompletePage {
	place: PlaceResult;

	constructor(private modalCtrl: ModalController) {
	}

	showAddressModal () {
		let modal = this.modalCtrl.create(AutocompleteComponent, { country: 'UA' });
		modal.onDidDismiss((data: PlaceResult) => {
			if (data) {
				this.place = data;
				console.log(data);
			}
		});
		modal.present();
	}
}
