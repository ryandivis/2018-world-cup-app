import { Component } from '@angular/core';
import { TabOnePage } from './tab-one.page';
import { TabTwoPage } from './tab-two.page';

@Component({
	selector: 'badged-tabs',
	templateUrl: 'badged-tabs.page.html'
})
export class BadgedTabsPage {
	tabOne: TabOnePage;
	tabTwo: TabTwoPage;

	badgeValue1 = 4;
	badgeValue2 = 23;

	constructor() {
		this.tabOne = TabOnePage;
		this.tabTwo = TabTwoPage;
	}
}