import { Component } from '@angular/core';
import { AngularBillboardService } from 'angular-billboard';

@Component({
	templateUrl: './chart.html'
})
export class StackedBarChartPage {
	type = 'Stacked bar';
	chart: any;
	chartsOptions: any[];

	constructor(private angularBillboardService: AngularBillboardService) {
		this.chartsOptions = [
			{
				data: {
					columns: [
						['data1', -30, 200, 200, 400, -150, 250],
						['data2', 130, 100, -100, 200, -150, 50],
						['data3', -230, 200, 200, -300, 250, 250]
					],
					type: 'bar',
					groups: [
						[
							'data1',
							'data2'
						]
					]
				},
				grid: {
					y: {
						lines: [
							{
								value: 0
							}
						]
					}
				}
			}
		];
		this.chart = this.angularBillboardService.generate(...this.chartsOptions)[0];
	}

	ionViewDidLoad() {
		setTimeout(() => {
			this.chart.groups([['data1', 'data2', 'data3']]);
		}, 1000);

		setTimeout(() => {
			this.chart.load({
				columns: [['data4', 100, -50, 150, 200, -300, -100]]
			});
		}, 1500);

		setTimeout(() => {
			this.chart.groups([['data1', 'data2', 'data3', 'data4']]);
		}, 2000);
	}
}
