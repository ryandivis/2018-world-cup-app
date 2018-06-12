import { Component } from '@angular/core';
import { AngularBillboardService } from 'angular-billboard';

@Component({
	templateUrl: './chart.html'
})
export class LineChartPage {
	type = 'Line';
	chart: any;
	chartsOptions: any[];

	constructor(private angularBillboardService: AngularBillboardService) {
		this.chartsOptions = [
			{
				data: {
					type: 'line',
					columns: [
						['data1', 30, 200, 100, 400, 150, 250],
						['data2', 50, 20, 10, 40, 15, 25]
					]
				},
				title: {
					text: 'Line'
				}
			}
		];
		this.chart = this.angularBillboardService.generate(...this.chartsOptions)[0];
	}

	ionViewDidLoad() {
		console.log('loaded');
		setTimeout(() => {
			this.chart.load({
				columns: [
					['data1', 230, 190, 300, 500, 300, 400]
				]
			});
		}, 1000);

		setTimeout(() => {
			this.chart.load({
				columns: [
					['data3', 130, 150, 200, 300, 200, 100]
				]
			});
		}, 1500);

		setTimeout(() => {
			this.chart.unload({
				ids: 'data1'
			});
		}, 2000);
	}
}
