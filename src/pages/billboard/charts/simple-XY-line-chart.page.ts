import { Component } from '@angular/core';
import { AngularBillboardService } from 'angular-billboard';

@Component({
	templateUrl: './chart.html'
})
export class SimpleXYLineChartPage {
	type = 'Simple XY Line';
	chart: any;
	chartsOptions: any[];

	constructor(private angularBillboardService: AngularBillboardService) {
		this.chartsOptions = [
			{
				data: {
					x: 'x',
					columns: [
						['x', 30, 50, 100, 230, 300, 310],
						['data1', 30, 200, 100, 400, 150, 250],
						['data2', 130, 300, 200, 300, 250, 450]
					]
				}
			}
		];
		this.chart = this.angularBillboardService.generate(...this.chartsOptions)[0];
	}

	ionViewDidLoad() {
		setTimeout(() => {
			this.chart.load({
				columns: [
					['data1', 100, 250, 150, 200, 100, 350]
				]
			});
		}, 1000);

		setTimeout(() => {
			this.chart.load({
				columns: [
					['data3', 80, 150, 100, 180, 80, 150]
				]
			});
		}, 1500);

		setTimeout(() => {
			this.chart.unload({
				ids: 'data2'
			});
		}, 2000);
	}
}
