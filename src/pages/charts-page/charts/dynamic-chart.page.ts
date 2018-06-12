import { Component } from '@angular/core';

@Component({
	templateUrl: 'dynamic-chart.html'
})
export class DynamicChartPage {

	constructor() {
	}

	lineChartData: Array<any> = [
		[65, 59, 80, 81, 56, 55, 40],
		[28, 48, 40, 19, 86, 27, 90]
	];
	lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	lineChartType: string = 'line';
	pieChartType: string = 'pie';
	lineChartOptions: any = {
		animation: false,
		responsive: true
	};

	// Pie
	pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
	pieChartData: number[] = [300, 500, 100];

	randomizeType(): void {
		this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
		this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
	}

	chartClicked(e: any): void {
		console.log(e);
	}

	chartHovered(e: any): void {
		console.log(e);
	}
}
