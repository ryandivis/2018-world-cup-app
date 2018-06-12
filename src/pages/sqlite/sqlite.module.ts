import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { SqliteEditPage } from './edit/sqlite.edit.page';
import { SqliteListPage } from './list/sqlite.list.page';
import { CustomComponentsModule } from '../../components/custom-components.module';

@NgModule({
	imports: [IonicModule, CustomComponentsModule],
	declarations: [
		SqliteEditPage,
		SqliteListPage
	],
	entryComponents: [
		SqliteEditPage,
		SqliteListPage
	]
})
export class SqliteModule {

}