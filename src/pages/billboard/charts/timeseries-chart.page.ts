import { Component } from '@angular/core';
import { AngularBillboardService } from 'angular-billboard';

@Component({
	templateUrl: './chart.html'
})
export class TimeSeriesChartPage {
	type = 'TimeSeries';
	chart: any;
	chartsOptions: any[];

	constructor(private angularBillboardService: AngularBillboardService) {
		this.chartsOptions = [
			{
				data: {
					x: 'x',
					columns: [
						['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
						['data1', 30, 200, 100, 400, 150, 250],
						['data2', 130, 340, 200, 500, 250, 350]
					]
				},
				axis: {
					x: {
						type: 'timeseries',
						tick: {
							format: '%Y-%m-%d'
						}
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
					['data3', 400, 500, 450, 700, 600, 500]
				]
			});
		}, 1000);
	}
}
