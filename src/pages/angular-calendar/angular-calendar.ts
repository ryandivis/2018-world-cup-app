import { Component } from '@angular/core';
import { CalendarDateFormatter } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { CustomDateFormatter } from './custom-date-formatter';

@Component({
	selector: 'page-angular-calendar',
	templateUrl: 'angular-calendar.html',
	providers: [{
		provide: CalendarDateFormatter,
		useClass: CustomDateFormatter
	}]
})
export class AngularCalendarPage {
	viewDate: Date = new Date();
	view = 'month';
	activeDayIsOpen: boolean = false;

	events: any[] = [];

	constructor() {
		this.events.push({
			title: 'Ionic show',
			start: new Date()
		})
	}

	dayClicked({ date, events }: { date: Date, events: any[] }): void {

		if (isSameMonth(date, this.viewDate)) {
			if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
				this.activeDayIsOpen = false;
			} else {
				this.activeDayIsOpen = true;
				this.viewDate = date;
			}
		}
	}

	viewDateChange() {
		this.activeDayIsOpen = false;
	}
}
