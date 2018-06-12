import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchesPage } from './matches';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    MatchesPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchesPage),
    PipesModule
  ],
})
export class MatchesPageModule {}
