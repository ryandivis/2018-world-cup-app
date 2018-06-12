import { Component } from '@angular/core';
import { AngularBillboardService } from 'angular-billboard';

@Component({
	templateUrl: './chart.html'
})
export class MultipleXYLineChartPage {
	type = 'Multiple XY Line';
	chart: any;
	chartsOptions: any[];

	constructor(private angularBillboardService: AngularBillboardService) {
		this.chartsOptions = [
			{
				data: {
					xs: {
						data1: 'x1',
						data2: 'x2'
					},
					columns: [
						['x1', 10, 30, 45, 50, 70, 100],
						['x2', 30, 50, 75, 100, 120],
						['data1', 30, 200, 100, 400, 150, 250],
						['data2', 20, 180, 240, 100, 190]
					]
				}
			}
		];
		this.chart = this.angularBillboardService.generate(...this.chartsOptions)[0];
	}
}
