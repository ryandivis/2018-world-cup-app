import { Component } from '@angular/core';
import * as leaflet from 'leaflet';

@Component({
	templateUrl: 'leafletjs.html'
})
export class LeafletjsPage {
	options: any;

	constructor() {
		this.options = {
			layers: [
				leaflet.tileLayer(
					'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
					{ maxZoom: 18, attribution: 'Barebone Ionic 2' }
				),
				leaflet.marker([48.4561, 35.0261]).bindPopup('Hello from LeafletJS')
			],
			zoom: 11,
			center: leaflet.latLng(48.4561, 35.0261)
		};
	}
}