import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { SlackPage } from './slack.page';
import { SlackService } from './slack.service';

@NgModule({
	imports: [
		IonicModule
	],
	declarations: [SlackPage],
	entryComponents: [SlackPage],
	providers: [SlackService]
})
export class SlackModule {

}