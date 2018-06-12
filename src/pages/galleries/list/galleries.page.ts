import { Component } from '@angular/core';
import { GalleriesService } from '../galleries.service';
import { GalleryPreviewPage } from '../preview/gallery-preview.page';
import { NavController } from 'ionic-angular';

@Component({
	templateUrl: 'galleries.html'
})
export class GalleriesPage {
	private nav: NavController;
	private GalleriesService: GalleriesService;
	galleries: any;

	constructor(GalleriesService: GalleriesService, nav: NavController) {
		this.GalleriesService = GalleriesService;
		this.nav = nav;
		this.GalleriesService.all().subscribe(
			response => this.galleries = response
		)
	}

	goToGallery(id) {
		this.nav.push(GalleryPreviewPage, {
			id: id
		});
	}

}
