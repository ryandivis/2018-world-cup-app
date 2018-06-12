import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { IonicModule } from 'ionic-angular';
import { HighChartsListPage } from './list/high-charts.list.page';
import { LineChartPage } from './charts/line-chart.page';
import { BarChartPage } from './charts/bar-chart.page';
import { PieChartPage } from './charts/pie-chart.page';
import { ScatterPlotPage } from './charts/scatter-plot.page';
import { AreaChartPage } from './charts/area-chart.page';
import { DynamicChartPage } from './charts/dynamic-chart.page';

@NgModule({
	imports: [ChartModule, IonicModule],
	declarations: [HighChartsListPage, LineChartPage, BarChartPage, PieChartPage, ScatterPlotPage, AreaChartPage, DynamicChartPage],
	entryComponents: [HighChartsListPage, LineChartPage, BarChartPage, PieChartPage, ScatterPlotPage, AreaChartPage, DynamicChartPage]
})
export class HighChartsDemoModule {
}