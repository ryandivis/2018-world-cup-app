import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AreaChartPage } from '../charts/area-chart.page';
import { BarChartPage } from '../charts/bar-chart.page';
import { LineChartPage } from '../charts/line-chart.page';
import { PieChartPage } from '../charts/pie-chart.page';
import { ScatterPlotPage } from '../charts/scatter-plot.page';
import { DynamicChartPage } from '../charts/dynamic-chart.page';

@Component({
	templateUrl: 'high-charts.list.html'
})
export class HighChartsListPage {
	charts: string[];
	nav: NavController;

	constructor(nav: NavController) {
		this.nav = nav;
		this.charts = ['Line', 'Bar', 'Pie', 'Scatter', 'Area', 'Dynamic'];
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
			case 'Pie':
				page = PieChartPage;
				break;
			case 'Scatter':
				page = ScatterPlotPage;
				break;
			case 'Area':
				page = AreaChartPage;
				break;
			case 'Dynamic':
				page = DynamicChartPage;
				break;
		}
		this.nav.push(page);
	}

}
