import { Component } from '@angular/core';
import { AngularBillboardService } from 'angular-billboard';

@Component({
	templateUrl: './chart.html'
})
export class SplineChartPage {
	type = 'Spline';
	chart: any;
	chartsOptions: any[];

	constructor(private angularBillboardService: AngularBillboardService) {
		this.chartsOptions = [
			{
				data: {
					columns: [
						['data1', 30, 200, 100, 400, 150, 250],
						['data2', 130, 100, 140, 200, 150, 50]
					],
					type: 'spline'
				}
			}
		];
		this.chart = this.angularBillboardService.generate(...this.chartsOptions)[0];
	}
}
