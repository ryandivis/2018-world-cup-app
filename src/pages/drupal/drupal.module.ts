import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { PipesModule } from '../../pipes/pipes.module';

import { DrupalItemPage } from './item/drupal.item.page';
import { DrupalListPage } from './list/drupal.list.page';

@NgModule({
	imports: [
		IonicModule,
		PipesModule
	],
	declarations: [
		DrupalItemPage,
		DrupalListPage
	],
	entryComponents: [
		DrupalItemPage,
		DrupalListPage
	]
})
export class DrupalModule {

}