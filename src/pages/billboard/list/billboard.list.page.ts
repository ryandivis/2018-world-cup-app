import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AreaChartPage } from '../charts/area-chart.page';
import { BarChartPage } from '../charts/bar-chart.page';
import { BubbleChartPage } from '../charts/bubble-chart.page';
import { CombinationChartPage } from '../charts/combination-chart.page';
import { DonutChartPage } from '../charts/donut-chart.page';
import { GaugeChartPage } from '../charts/gauge-chart.page';
import { LineChartWithRegionsChartPage } from '../charts/line-chart-with-regions.page';
import { LineChartPage } from '../charts/line-chart.page';
import { MultipleXYLineChartPage } from '../charts/multiple-XY-line-chart.page';
import { PieChartPage } from '../charts/pie-chart.page';
import { ScatterPlotPage } from '../charts/scatter-plot.page';
import { SimpleXYLineChartPage } from '../charts/simple-XY-line-chart.page';
import { SplineChartPage } from '../charts/spline-chart.page';
import { StackedAreaChartPage } from '../charts/stacked-area-chart.page';
import { StackedBarChartPage } from '../charts/stacked-bar-chart.page';
import { StepChartPage } from '../charts/step-chart.page';
import { TimeSeriesChartPage } from '../charts/timeseries-chart.page';

@Component({
	templateUrl: './billboard.list.html'
})
export class BillboardListPage {
	charts: any[] = [
		{ type: 'Line', page: LineChartPage },
		{ type: 'Bar', page: BarChartPage },
		{ type: 'TimeSeries', page: TimeSeriesChartPage },
		{ type: 'Spline', page: SplineChartPage },
		{ type: 'Simple XY Line', page: SimpleXYLineChartPage },
		{ type: 'Multiple XY Line', page: MultipleXYLineChartPage },
		{ type: 'Line with regions', page: LineChartWithRegionsChartPage },
		{ type: 'Step', page: StepChartPage },
		{ type: 'Area', page: AreaChartPage },
		{ type: 'Stacked Area', page: StackedAreaChartPage },
		{ type: 'Stacked Bar', page: StackedBarChartPage },
		{ type: 'Scatter plot', page: ScatterPlotPage },
		{ type: 'Pie', page: PieChartPage },
		{ type: 'Donut', page: DonutChartPage },
		{ type: 'Gauge', page: GaugeChartPage },
		{ type: 'Bubble', page: BubbleChartPage },
		{ type: 'Combination', page: CombinationChartPage }
	];

	constructor(private nav: NavController) {
	}

	itemTapped(page) {
		this.nav.push(page);
	}
}
