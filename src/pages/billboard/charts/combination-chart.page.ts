import { Component } from '@angular/core';
import { AngularBillboardService } from 'angular-billboard';

@Component({
	templateUrl: './chart.html'
})
export class CombinationChartPage {
	type = 'Combination';
	chart: any;
	chartsOptions: any[];

	constructor(private angularBillboardService: AngularBillboardService) {
		this.chartsOptions = [
			{
				data: {
					columns: [
						['data1', 30, 20, 50, 40, 60, 50],
						['data2', 200, 130, 90, 240, 130, 220],
						['data3', 300, 200, 160, 400, 250, 250],
						['data4', 200, 130, 90, 240, 130, 220],
						['data5', 130, 120, 150, 140, 160, 150],
						['data6', 90, 70, 20, 50, 60, 120],
						['data7', 283, 170, 275, 143, 220, 255]
					],
					type: 'bar',
					types: {
						data3: 'spline',
						data4: 'line',
						data6: 'area',
						data7: 'step',
						data1: 'bar',
						data2: 'bar',
						data5: 'bar'
					},
					groups: [
						[
							'data1',
							'data2'
						]
					]
				}
			}
		];
		this.chart = this.angularBillboardService.generate(...this.chartsOptions)[0];
	}
}
