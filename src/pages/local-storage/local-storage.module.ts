import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { LocalStorageEditPage } from './edit/local-storage.edit.page';
import { LocalStorageListPage } from './list/local-storage.list.page';
import { CustomComponentsModule } from '../../components/custom-components.module';

@NgModule({
	imports: [IonicModule, CustomComponentsModule],
	declarations: [
		LocalStorageEditPage,
		LocalStorageListPage
	],
	entryComponents: [
		LocalStorageEditPage,
		LocalStorageListPage
	]
})
export class LocalStorageModule {

}