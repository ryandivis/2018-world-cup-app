import { Component } from '@angular/core';

@Component({
	templateUrl: 'doughnut-chart.html'
})
export class DoughnutChartPage {

	constructor() {
	}

	doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
	doughnutChartData: number[] = [350, 450, 100];
	doughnutChartType: string = 'doughnut';

	// events
	chartClicked(e: any): void {
		console.log(e);
	}

	public chartHovered(e: any): void {
		console.log(e);
	}
}
