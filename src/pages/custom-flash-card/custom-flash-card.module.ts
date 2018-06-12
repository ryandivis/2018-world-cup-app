import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { CustomFlashCardPage } from './custom-flash-card.page';
import { CustomComponentsModule } from '../../components/custom-components.module';

@NgModule({
	imports: [IonicModule, CustomComponentsModule],
	declarations: [CustomFlashCardPage],
	entryComponents: [CustomFlashCardPage]
})
export class CustomFlashCardModule {

}