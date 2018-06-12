import { NgModule } from '@angular/core';
import { AngularBillboardModule } from 'angular-billboard';
import { IonicModule } from 'ionic-angular';
import { AreaChartPage } from './charts/area-chart.page';
import { BarChartPage } from './charts/bar-chart.page';
import { BubbleChartPage } from './charts/bubble-chart.page';
import { CombinationChartPage } from './charts/combination-chart.page';
import { DonutChartPage } from './charts/donut-chart.page';
import { GaugeChartPage } from './charts/gauge-chart.page';
import { LineChartWithRegionsChartPage } from './charts/line-chart-with-regions.page';
import { LineChartPage } from './charts/line-chart.page';
import { MultipleXYLineChartPage } from './charts/multiple-XY-line-chart.page';
import { PieChartPage } from './charts/pie-chart.page';
import { ScatterPlotPage } from './charts/scatter-plot.page';
import { SimpleXYLineChartPage } from './charts/simple-XY-line-chart.page';
import { SplineChartPage } from './charts/spline-chart.page';
import { StackedAreaChartPage } from './charts/stacked-area-chart.page';
import { StackedBarChartPage } from './charts/stacked-bar-chart.page';
import { StepChartPage } from './charts/step-chart.page';
import { TimeSeriesChartPage } from './charts/timeseries-chart.page';
import { BillboardListPage } from './list/billboard.list.page';

@NgModule({
	imports: [IonicModule, AngularBillboardModule],
	declarations: [
		BillboardListPage,
		LineChartPage,
		BarChartPage,
		TimeSeriesChartPage,
		SplineChartPage,
		SimpleXYLineChartPage,
		MultipleXYLineChartPage,
		LineChartWithRegionsChartPage,
		StepChartPage,
		AreaChartPage,
		StackedAreaChartPage,
		StackedBarChartPage,
		ScatterPlotPage,
		PieChartPage,
		DonutChartPage,
		GaugeChartPage,
		BubbleChartPage,
		CombinationChartPage
	],
	entryComponents: [
		BillboardListPage,
		LineChartPage,
		BarChartPage,
		TimeSeriesChartPage,
		SplineChartPage,
		SimpleXYLineChartPage,
		MultipleXYLineChartPage,
		LineChartWithRegionsChartPage,
		StepChartPage,
		AreaChartPage,
		StackedAreaChartPage,
		StackedBarChartPage,
		ScatterPlotPage,
		PieChartPage,
		DonutChartPage,
		GaugeChartPage,
		BubbleChartPage,
		CombinationChartPage
	]
})
export class BillboardPageModule {

}