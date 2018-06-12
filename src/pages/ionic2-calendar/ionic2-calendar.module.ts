import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NgCalendarModule } from 'ionic2-calendar';
import { Ionic2CalendarPage } from './ionic2-calendar';

@NgModule({
	declarations: [
		Ionic2CalendarPage
	],
	entryComponents: [Ionic2CalendarPage],
	imports: [
		IonicModule,
		NgCalendarModule
	]
})
export class Ionic2CalendarPageModule {
}
