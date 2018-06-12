import { NgModule } from '@angular/core';
import { CalendarModule } from 'angular-calendar';
import { IonicModule } from 'ionic-angular';
import { AngularCalendarPage } from './angular-calendar';

@NgModule({
	declarations: [AngularCalendarPage],
	entryComponents: [AngularCalendarPage],
	imports: [
		IonicModule,
		CalendarModule
	]
})
export class AngularCalendarPageModule {
}
