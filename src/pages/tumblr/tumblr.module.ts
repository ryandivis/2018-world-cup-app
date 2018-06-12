import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PipesModule } from '../../pipes/pipes.module';
import { TumblrFeedPage } from './tumblr-feed.page';

import { TumblrService } from './tumblr.service';

@NgModule({
	declarations: [
		TumblrFeedPage
	],
	entryComponents: [
		TumblrFeedPage
	],
	imports: [IonicModule, PipesModule],
	providers: [TumblrService]
})
export class TumblrModule {

}