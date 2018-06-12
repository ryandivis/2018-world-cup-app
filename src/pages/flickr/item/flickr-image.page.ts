import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { FlickrService } from '../flickr.service';

@Component({
	selector: 'flickr-image',
	templateUrl: './flickr-image.html'
})
export class FlickrImagePage {
	image: any;
	info: any;

	constructor(navParams: NavParams, service: FlickrService) {
		this.image = navParams.get('image');
		service.getPhotoInfo(this.image.id)
			.subscribe(info => this.info = info);
	}

}