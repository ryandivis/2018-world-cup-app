import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { InstagramLoginPage } from './login/instagram-login.page';
import { InstagramRecentMediaPage } from './recent-media/instagram-recent-media.page';
import { InstagramService } from './instagram.service';

@NgModule({
	imports: [IonicModule],
	declarations: [
		InstagramLoginPage,
		InstagramRecentMediaPage
	],
	entryComponents: [
		InstagramLoginPage,
		InstagramRecentMediaPage
	],
	providers: [InstagramService]
})
export class InstagramModule {

}