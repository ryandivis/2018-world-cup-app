import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BarChartPage } from '../charts/bar-chart.page';
import { DoughnutChartPage } from '../charts/doughnut-chart.page';
import { DynamicChartPage } from '../charts/dynamic-chart.page';
import { LineChartPage } from '../charts/line-chart.page';
import { PieChartPage } from '../charts/pie-chart.page';
import { PolarAreaChartPage } from '../charts/polar-area-chart.page';
import { RadarChartPage } from '../charts/radar-chart.page';

@Component({
	templateUrl: 'charts.list.html'
})
export class ChartsListPage {
	charts: string[];
	nav: NavController;

	constructor(nav: NavController) {
		this.nav = nav;
		this.charts = ['Line', 'Bar', 'Doughnut', 'Radar', 'Pie', 'Polar Area', 'Dynamic'];
	}

	itemTapped(item) {
		let page;
		switch (item) {
			case 'Line':
				page = LineChartPage;
				break;
			case 'Bar':
				page = BarChartPage;
				break;
			case 'Doughnut':
				page = DoughnutChartPage;
				break;
			case 'Radar':
				page = RadarChartPage;
				break;
			case 'Polar Area':
				page = PolarAreaChartPage;
				break;
			case 'Dynamic':
				page = DynamicChartPage;
				break;
			case 'Pie':
				page = PieChartPage
				break;
		}
		this.nav.push(page);
	}

}
