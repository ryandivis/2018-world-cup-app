import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { TilesComponent } from './tiles/tiles.component';
import { FabToolbar } from './fab-toolbar/fab-toolbar';
import { TinderCardsComponent } from './tinder-cards/tinder-cards.component';
import { SwingModule } from 'angular2-swing';
import { NoItemsComponent } from './no-items/no-items.component';
import { FaIconComponent } from './fa-icon/fa-icon.component';
import { TypcnComponent } from './typcn/typcn.component';

@NgModule({
	imports: [IonicModule, SwingModule],
	declarations: [FlashCardComponent, TilesComponent, FabToolbar, TinderCardsComponent, NoItemsComponent, FaIconComponent, TypcnComponent],
	exports: [TilesComponent, FlashCardComponent, FabToolbar, TinderCardsComponent, NoItemsComponent, FaIconComponent, TypcnComponent]
})
export class CustomComponentsModule {
}