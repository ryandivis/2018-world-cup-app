import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomComponentsModule } from '../../components/custom-components.module';

import { TypiconsPage } from './typicons.page';

@NgModule({
	imports: [IonicModule, CustomComponentsModule],
	declarations: [TypiconsPage],
	entryComponents: [TypiconsPage]
})
export class TypiconsModule {

}