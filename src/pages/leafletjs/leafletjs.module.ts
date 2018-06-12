import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { IonicModule } from 'ionic-angular';
import { LeafletjsPage } from './leafletjs.page';

@NgModule({
	declarations: [LeafletjsPage],
	entryComponents: [LeafletjsPage],
	imports: [IonicModule, AgmCoreModule, LeafletModule]
})
export class LeafletjsModule {

}