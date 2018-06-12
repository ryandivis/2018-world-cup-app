import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { GalleriesService } from '../galleries.service';

@Component({
	templateUrl: 'gallery.html'
})
export class GalleryPage {
	private GalleriesService: GalleriesService;
	galleryId: number;
	pictures: any;
	pictureIndex: any;
	mySlideOptions: any;

	constructor(GalleriesService: GalleriesService, navParams: NavParams) {
		this.GalleriesService = GalleriesService;
		this.galleryId = navParams.get('galleryId');
		this.pictureIndex = navParams.get('pictureIndex');
		this.mySlideOptions = {
			initialSlide: this.pictureIndex
		};
		this.GalleriesService.get(this.galleryId).subscribe(
			gallery => this.pictures = gallery.pictures
		)
	}

}