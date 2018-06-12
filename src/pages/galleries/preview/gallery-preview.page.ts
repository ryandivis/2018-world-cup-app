import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GalleriesService } from '../galleries.service';
import { GalleryPage } from '../item/gallery.page';
import _ from 'lodash';

@Component({
	templateUrl: 'gallery-preview.html'
})
export class GalleryPreviewPage {
	private nav: NavController;
	private GalleriesService: GalleriesService;
	galleryId: number;
	groupedPictures: any;
	pictures: any;

	constructor(nav: NavController, GalleriesService: GalleriesService, navParams: NavParams) {
		this.GalleriesService = GalleriesService;
		this.galleryId = navParams.get('id');
		this.nav = nav;
		this.pictures = [];
		this.GalleriesService.get(this.galleryId).subscribe(
			gallery => {
				this.pictures = gallery.pictures;
				this.groupedPictures = _.chunk(gallery.pictures, 3);
			}
		)
	}

	navigateToFullGalleryView(picture) {
		let pictureIndex = _.indexOf(this.pictures, picture);
		this.nav.push(GalleryPage, {
			galleryId: this.galleryId,
			pictureIndex: pictureIndex
		});
	}

}