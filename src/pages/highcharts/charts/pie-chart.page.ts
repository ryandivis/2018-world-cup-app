import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
	templateUrl: 'pie-chart.html'
})
export class PieChartPage {
	chart = new Chart({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
		},
		title: {
			text: 'Browser market shares January, 2015 to May, 2015'
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %',
					style: {
						color: 'black'
					}
				}
			}
		},
		series: [{
			name: 'Brands',
			data: [{
				name: 'Microsoft Internet Explorer',
				y: 56.33
			}, {
				name: 'Chrome',
				y: 24.03,
				sliced: true,
				selected: true
			}, {
				name: 'Firefox',
				y: 10.38
			}, {
				name: 'Safari',
				y: 4.77
			}, {
				name: 'Opera',
				y: 0.91
			}, {
				name: 'Proprietary or Undetectable',
				y: 0.2
			}]
		}]
	});
}
