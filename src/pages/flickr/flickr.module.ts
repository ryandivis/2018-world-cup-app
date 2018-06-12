import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { FlickrPhotostreamPage } from './photostream/flickr-photostream.page';
import { FlickrImagePage } from './item/flickr-image.page';
import { FlickrService } from './flickr.service';

@NgModule({
	declarations: [
		FlickrImagePage,
		FlickrPhotostreamPage
	],
	entryComponents: [
		FlickrImagePage,
		FlickrPhotostreamPage
	],
	imports: [
		IonicModule
	],
	providers: [FlickrService]
})
export class FlickrModule {

}