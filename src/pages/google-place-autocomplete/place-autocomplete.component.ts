import { NgZone, Component, ViewChild } from '@angular/core';
import { ViewController, NavParams, Searchbar } from 'ionic-angular';
import AutocompletePrediction = google.maps.places.AutocompletePrediction;
import PlaceResult = google.maps.places.PlaceResult;

@Component({
	templateUrl: 'place-autocomplete.component.html'
})
export class AutocompleteComponent {
	autocompleteItems: AutocompletePrediction[];
	autocomplete: any;

	@ViewChild('searchbar') searchbar: Searchbar;

	private service = new google.maps.places.AutocompleteService();
	private placeService = new google.maps.places.PlacesService(document.createElement('div'));
	private country: string;

	constructor(public viewCtrl: ViewController, private zone: NgZone, params: NavParams) {
		this.autocompleteItems = [];
		this.autocomplete = {
			query: ''
		};
		this.country = params.get('country');
	}

	ionViewDidLoad() {
		this.searchbar.setFocus();
	}

	dismiss() {
		this.viewCtrl.dismiss();
	}

	chooseItem(item: AutocompletePrediction) {
		this.placeService.getDetails({ placeId: item.place_id }, (result: PlaceResult) => {
			console.log(result);
			this.viewCtrl.dismiss(result);
		});
	}

	updateSearch() {
		if (this.autocomplete.query == '') {
			this.autocompleteItems = [];
			return;
		}
		let request = {
			input: this.autocomplete.query,
			componentRestrictions: { country: this.country }
		};
		this.service.getPlacePredictions(request, (predictions) => {
			this.autocompleteItems = [];
			this.zone.run(() => {
				predictions.forEach((prediction) => {
					this.autocompleteItems.push(prediction);
				});
			});
		});
	}
}