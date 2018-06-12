import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TinderCardsPage } from './tinder-cards.page';
import { CustomComponentsModule } from '../../components/custom-components.module';

@NgModule({
	imports: [IonicModule, CustomComponentsModule],
	declarations: [TinderCardsPage],
	entryComponents: [TinderCardsPage]
})
export class TinderCardsModule {
}