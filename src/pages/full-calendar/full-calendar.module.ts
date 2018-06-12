import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { FullCalendarModule } from 'ng-fullcalendar';
import { EventService } from './events.service';
import { FullCalendarPage } from './full-calendar';

@NgModule({
	declarations: [
		FullCalendarPage
	],
	entryComponents: [
		FullCalendarPage
	],
	imports: [
		FullCalendarModule,
		IonicModule
	],
	providers: [EventService]
})
export class FullCalendarPageModule {
}
