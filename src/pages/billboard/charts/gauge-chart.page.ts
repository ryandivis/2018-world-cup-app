import { Component } from '@angular/core';
import { AngularBillboardService } from 'angular-billboard';

@Component({
	templateUrl: './chart.html'
})
export class GaugeChartPage {
	type = 'Gauge';
	chart: any;
	chartsOptions: any[];

	constructor(private angularBillboardService: AngularBillboardService) {
		this.chartsOptions = [
			{
				data: {
					columns: [
						['data', 91.4]
					],
					type: 'gauge'
				},
				gauge: {},
				color: {
					pattern: [
						'#FF0000',
						'#F97600',
						'#F6C600',
						'#60B044'
					],
					threshold: {
						values: [
							30,
							60,
							90,
							100
						]
					}
				},
				size: {
					height: 180
				}
			}
		];
		this.chart = this.angularBillboardService.generate(...this.chartsOptions)[0];
	}

	ionViewDidLoad() {
		setTimeout(() => {
			this.chart.load({
				columns: [['data', 10]]
			});
		}, 1000);

		setTimeout(() => {
			this.chart.load({
				columns: [['data', 50]]
			});
		}, 2000);

		setTimeout(() => {
			this.chart.load({
				columns: [['data', 70]]
			});
		}, 3000);

		setTimeout(() => {
			this.chart.load({
				columns: [['data', 0]]
			});
		}, 4000);

		setTimeout(() => {
			this.chart.load({
				columns: [['data', 100]]
			});
		}, 5000);
	}
}
