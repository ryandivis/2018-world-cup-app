import { NgModule } from '@angular/core';
import { BadgedTabsPage } from './badged-tabs.page';
import { IonicModule } from 'ionic-angular';
import { TabOnePage } from './tab-one.page';
import { TabTwoPage } from './tab-two.page';

@NgModule({
	imports: [IonicModule],
	declarations: [BadgedTabsPage, TabOnePage, TabTwoPage],
	entryComponents: [BadgedTabsPage, TabOnePage, TabTwoPage]
})
export class BadgedTabsModule {
}
