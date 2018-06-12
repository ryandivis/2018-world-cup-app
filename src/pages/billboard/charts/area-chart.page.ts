import { Component } from '@angular/core';
import { AngularBillboardService } from 'angular-billboard';

@Component({
	templateUrl: './chart.html'
})
export class AreaChartPage {
	type = 'Area';
	chart: any;
	chartsOptions: any[];

	constructor(private angularBillboardService: AngularBillboardService) {
		this.chartsOptions = [
			{
				data: {
					columns: [
						['data1', 300, 350, 300, 0, 0, 0],
						['data2', 130, 100, 140, 200, 150, 50]
					],
					types: {
						data1: 'area',
						data2: 'area-spline'
					}
				}
			}
		];
		this.chart = this.angularBillboardService.generate(...this.chartsOptions)[0];
	}
}
