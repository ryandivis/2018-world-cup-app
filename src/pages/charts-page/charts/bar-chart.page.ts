import { Component } from '@angular/core';

@Component({
	templateUrl: 'bar-chart.html'
})
export class BarChartPage {

	constructor() {
	}

	barChartOptions: any = {
		scaleShowVerticalLines: false,
		responsive: true
	};
	barChartLabels: string[] = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
	barChartType: string = 'bar';
	barChartLegend: boolean = true;

	barChartData: any[] = [
		{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
		{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
	];

	// events
	chartClicked(e: any): void {
		console.log(e);
	}

	chartHovered(e: any): void {
		console.log(e);
	}

	randomize(): void {
		// Only Change 3 values
		let data = [
			Math.round(Math.random() * 100),
			59,
			80,
			(Math.random() * 100),
			56,
			(Math.random() * 100),
			40];
		let clone = JSON.parse(JSON.stringify(this.barChartData));
		clone[0].data = data;
		this.barChartData = clone;
		/**
		 * (My guess), for Angular to recognize the change in the dataset
		 * it has to change the dataset variable directly,
		 * so one way around it, is to clone the data, change it and then
		 * assign it;
		 */
	}
}
