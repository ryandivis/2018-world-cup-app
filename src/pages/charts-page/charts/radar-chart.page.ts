import { Component } from '@angular/core';


@Component({
	templateUrl: 'radar-chart.html'
})
export class RadarChartPage {

	constructor() {
	}

	radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

	radarChartData: any = [
		{ data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
		{ data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
	];
	radarChartType: string = 'radar';

	// events
	chartClicked(e: any): void {
		console.log(e);
	}

	chartHovered(e: any): void {
		console.log(e);
	}
}
