import { Component } from '@angular/core';
import { AngularBillboardService } from 'angular-billboard';

@Component({
	templateUrl: './chart.html'
})
export class LineChartWithRegionsChartPage {
	type = 'Line with regions';
	chart: any;
	chartsOptions: any[];

	constructor(private angularBillboardService: AngularBillboardService) {
		this.chartsOptions = [
			{
				data: {
					columns: [
						['data1', 30, 200, 100, 400, 150, 250],
						['data2', 50, 20, 10, 40, 15, 25]
					],
					regions: {
						data1: [
							{
								start: 1,
								end: 2,
								style: 'dashed'
							},
							{
								start: 3
							}
						],
						data2: [
							{
								end: 3
							}
						]
					}
				}
			}
		];
		this.chart = this.angularBillboardService.generate(...this.chartsOptions)[0];
	}
}
