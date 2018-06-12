import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import '../../../node_modules/chart.js/dist/Chart.bundle.min.js';

import { BarChartPage } from './charts/bar-chart.page';
import { DoughnutChartPage } from './charts/doughnut-chart.page';
import { DynamicChartPage } from './charts/dynamic-chart.page';
import { LineChartPage } from './charts/line-chart.page';
import { PieChartPage } from './charts/pie-chart.page';
import { PolarAreaChartPage } from './charts/polar-area-chart.page';
import { RadarChartPage } from './charts/radar-chart.page';
import { ChartsListPage } from './list/charts.list.page';

@NgModule({
	imports: [IonicModule, ChartsModule],
	declarations: [
		ChartsListPage,
		BarChartPage,
		DoughnutChartPage,
		DynamicChartPage,
		LineChartPage,
		PieChartPage,
		PolarAreaChartPage,
		RadarChartPage
	],
	entryComponents: [
		ChartsListPage,
		BarChartPage,
		DoughnutChartPage,
		DynamicChartPage,
		LineChartPage,
		PieChartPage,
		PolarAreaChartPage,
		RadarChartPage
	]
})
export class ChartsPageModule {

}