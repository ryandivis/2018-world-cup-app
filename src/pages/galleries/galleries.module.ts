import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { GalleryPreviewPage } from './preview/gallery-preview.page';
import { GalleryPage } from './item/gallery.page';
import { GalleriesPage } from './list/galleries.page';
import { GalleriesService } from './galleries.service';

@NgModule({
	declarations: [
		GalleriesPage,
		GalleryPage,
		GalleryPreviewPage
	],
	entryComponents: [
		GalleriesPage,
		GalleryPage,
		GalleryPreviewPage
	],
	imports: [
		IonicModule
	],
	providers: [GalleriesService]
})
export class GalleriesModule {

}