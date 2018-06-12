import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import _ from 'lodash';
import { FlickrService } from '../flickr.service';
import { FlickrImagePage } from '../item/flickr-image.page';

@Component({
	selector: 'flickr-photostream',
	templateUrl: './flickr-photostream.html'
})
export class FlickrPhotostreamPage {
	private nav: NavController;
	groupedPictures: any;
	pictures: any;

	constructor(nav: NavController, private service: FlickrService) {
		this.nav = nav;
		this.pictures = [];
		this.service.getPhotos()
			.subscribe(
				photos => {
					this.pictures = photos;
					this.groupedPictures = _.chunk(photos, 3);
				}
			);
	}

	navigateToFullGalleryView(image) {
		this.nav.push(FlickrImagePage, {
			image: image
		});
	}

}