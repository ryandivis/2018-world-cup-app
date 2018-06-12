import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { PinchToZoomPage } from './pinch-to-zoom';

@NgModule({
	declarations: [PinchToZoomPage],
	entryComponents: [PinchToZoomPage],
	imports: [IonicModule, IonicImageViewerModule]
})
export class PinchToZoomPageModule {
}
