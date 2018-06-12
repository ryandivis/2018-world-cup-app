import { Component } from '@angular/core';

@Component({
	selector: 'page-schedule',
	templateUrl: 'schedule.html'
})
export class SchedulePage {
	events: any[];

	constructor() {
		this.events = [
			{
				'title': 'All Day Event',
				'start': '2018-05-01'
			},
			{
				'title': 'Long Event',
				'start': '2018-05-07',
				'end': '2018-05-10'
			},
			{
				'title': 'Repeating Event',
				'start': '2018-05-09T16:00:00'
			},
			{
				'title': 'Repeating Event',
				'start': '2018-05-16T16:00:00'
			},
			{
				'title': 'Conference',
				'start': '2018-05-11',
				'end': '2018-05-13'
			}
		];
	}
}
