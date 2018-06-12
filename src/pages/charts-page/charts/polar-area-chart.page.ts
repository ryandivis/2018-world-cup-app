import { Component } from '@angular/core';


@Component({
	templateUrl: 'polar-area-chart.html'
})
export class PolarAreaChartPage {

	constructor() {
	}

	polarAreaChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
	polarAreaChartData: number[] = [300, 500, 100, 40, 120];
	polarAreaLegend: boolean = true;

	polarAreaChartType: string = 'polarArea';

	// events
	chartClicked(e: any): void {
		console.log(e);
	}

	chartHovered(e: any): void {
		console.log(e);
	}
}
