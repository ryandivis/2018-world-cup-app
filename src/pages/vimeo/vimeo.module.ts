import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { PipesModule } from '../../pipes/pipes.module';

import { VimeoItemPage } from './item/vimeo.item.page';
import { VimeoListPage } from './list/vimeo.list.page';

@NgModule({
	imports: [
		IonicModule,
		PipesModule
	],
	declarations: [
		VimeoItemPage,
		VimeoListPage
	],
	entryComponents: [
		VimeoItemPage,
		VimeoListPage
	]
})
export class VimeoModule {

}