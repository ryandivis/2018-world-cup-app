import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { PouchDbCrudEditPage } from './edit/pouchdb-crud.edit.page';
import { PouchDbCrudListPage } from './list/pouchdb-crud.list.page';
import { CustomComponentsModule } from '../../components/custom-components.module';

@NgModule({
	imports: [IonicModule, CustomComponentsModule],
	declarations: [
		PouchDbCrudEditPage,
		PouchDbCrudListPage
	],
	entryComponents: [
		PouchDbCrudEditPage,
		PouchDbCrudListPage
	]
})
export class PouchDbCrudModule {

}