import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomComponentsModule } from '../../components/custom-components.module';

import { FontAwesomePage } from './font-awesome-icons.page';

@NgModule({
	imports: [IonicModule, CustomComponentsModule],
	declarations: [FontAwesomePage],
	entryComponents: [FontAwesomePage]
})
export class FontAwesomeIconsModule {

}