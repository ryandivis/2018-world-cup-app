import { Component } from '@angular/core';

@Component({
	selector: 'page-ionic2-calendar',
	templateUrl: 'ionic2-calendar.html'
})
export class Ionic2CalendarPage {
	eventSource;
	viewTitle;

	isToday: boolean;
	calendar = {
		mode: 'month',
		currentDate: new Date(),
		dateFormatter: {
			formatMonthViewDay: function (date: Date) {
				return date.getDate().toString();
			},
			formatMonthViewDayHeader: function (date: Date) {
				return 'MonMH';
			},
			formatMonthViewTitle: function (date: Date) {
				return 'testMT';
			},
			formatWeekViewDayHeader: function (date: Date) {
				return 'MonWH';
			},
			formatWeekViewTitle: function (date: Date) {
				return 'testWT';
			},
			formatWeekViewHourColumn: function (date: Date) {
				return 'testWH';
			},
			formatDayViewHourColumn: function (date: Date) {
				return 'testDH';
			},
			formatDayViewTitle: function (date: Date) {
				return 'testDT';
			}
		}
	};

	loadEvents() {
		this.eventSource = this.createRandomEvents();
	}

	onViewTitleChanged(title) {
		this.viewTitle = title;
	}

	onEventSelected(event) {
		console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
	}

	changeMode(mode) {
		this.calendar.mode = mode;
	}

	today() {
		this.calendar.currentDate = new Date();
	}

	onTimeSelected(ev) {
		console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
			(ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
	}

	onCurrentDateChanged(event: Date) {
		let today = new Date();
		today.setHours(0, 0, 0, 0);
		event.setHours(0, 0, 0, 0);
		this.isToday = today.getTime() === event.getTime();
	}

	createRandomEvents() {
		let events = [];
		for (let i = 0; i < 50; i += 1) {
			let date = new Date();
			let eventType = Math.floor(Math.random() * 2);
			let startDay = Math.floor(Math.random() * 90) - 45;
			let endDay = Math.floor(Math.random() * 2) + startDay;
			let startTime;
			let endTime;
			if (eventType === 0) {
				startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
				if (endDay === startDay) {
					endDay += 1;
				}
				endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
				events.push({
					title: 'All Day - ' + i,
					startTime: startTime,
					endTime: endTime,
					allDay: true
				});
			} else {
				let startMinute = Math.floor(Math.random() * 24 * 60);
				let endMinute = Math.floor(Math.random() * 180) + startMinute;
				startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
				endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
				events.push({
					title: 'Event - ' + i,
					startTime: startTime,
					endTime: endTime,
					allDay: false
				});
			}
		}
		return events;
	}

	onRangeChanged(ev) {
		console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
	}

	markDisabled = (date: Date) => {
		let current = new Date();
		current.setHours(0, 0, 0);
		return date < current;
	};
}
