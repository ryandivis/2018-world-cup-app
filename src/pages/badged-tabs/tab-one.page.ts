import { Component } from '@angular/core';

@Component({
	selector: 'tab-one',
	template: `
		<ion-header>
			<ion-navbar>
				<button ion-button menuToggle>
					<ion-icon name="menu"></ion-icon>
				</button>
			<ion-title>Badged tabs</ion-title>
		</ion-navbar>
		</ion-header>
		<ion-content>
			<h1>TAB 1</h1>
		</ion-content>
	`
})
export class TabOnePage {

}

