import { Component } from '@angular/core';

@Component({
	selector: 'page-pinch-to-zoom',
	templateUrl: 'pinch-to-zoom.html'
})
export class PinchToZoomPage {
	url = 'http://skounis.s3.amazonaws.com/mobile-apps/barebone-glossy/galleries/architecture/05.jpg';

	constructor() {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PinchToZoomPage');
	}

}
