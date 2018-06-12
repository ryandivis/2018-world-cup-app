import { Component } from '@angular/core';
import { AngularBillboardService } from 'angular-billboard';

@Component({
	templateUrl: './chart.html'
})
export class StepChartPage {
	type = 'Step';
	chart: any;
	chartsOptions: any[];

	constructor(private angularBillboardService: AngularBillboardService) {
		this.chartsOptions = [
			{
				data: {
					columns: [
						['data1', 300, 350, 300, 0, 0, 100],
						['data2', 130, 100, 140, 200, 150, 50]
					],
					types: {
						data1: 'step',
						data2: 'area-step'
					}
				}
			}
		];
		this.chart = this.angularBillboardService.generate(...this.chartsOptions)[0];
	}
}
