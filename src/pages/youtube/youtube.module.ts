import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { PipesModule } from '../../pipes/pipes.module';

import { YoutubeItemPage } from './item/youtube.item.page';
import { YoutubeListPage } from './list/youtube.list.page';

@NgModule({
	imports: [
		IonicModule,
		PipesModule
	],
	declarations: [
		YoutubeItemPage,
		YoutubeListPage
	],
	entryComponents: [
		YoutubeItemPage,
		YoutubeListPage
	]
})
export class YoutubeModule {

}