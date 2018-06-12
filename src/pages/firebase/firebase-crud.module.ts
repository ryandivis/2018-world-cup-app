import { NgModule } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { IonicModule } from 'ionic-angular';

import { FirebaseCrudEditPage } from './edit/firebase-crud.edit.page';
import { FirebaseCrudService } from './firebase-crud.service';
import { FirebaseCrudListPage } from './list/firebase-crud.list.page';
import { CustomComponentsModule } from '../../components/custom-components.module';

@NgModule({
	imports: [IonicModule, CustomComponentsModule],
	declarations: [
		FirebaseCrudEditPage,
		FirebaseCrudListPage
	],
	entryComponents: [
		FirebaseCrudEditPage,
		FirebaseCrudListPage
	],
	providers: [AngularFireDatabase, FirebaseCrudService]
})
export class FirebaseCrudModule {

}