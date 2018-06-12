import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ScheduleModule } from 'primeng/components/schedule/schedule';
import { SchedulePage } from './schedule';

@NgModule({
	declarations: [
		SchedulePage

	],
	entryComponents: [
		SchedulePage

	],
	imports: [
		IonicModule,
		ScheduleModule
	]
})
export class SchedulePageModule {
}
