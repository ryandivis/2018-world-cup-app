import { Component } from '@angular/core';
import { AngularBillboardService } from 'angular-billboard';

@Component({
	templateUrl: './chart.html'
})
export class BarChartPage {
	type = 'Bar';
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
					type: 'bar'
				},
				bar: {
					width: {
						ratio: 0.5
					}
				}
			}
		];
		this.chart = this.angularBillboardService.generate(...this.chartsOptions)[0];
	}

	ionViewDidLoad() {
		setTimeout(() => {
			this.chart.load({
				columns: [
					['data3', 130, -150, 200, 300, -200, 100]
				]
			});
		}, 1000);
	}
}
