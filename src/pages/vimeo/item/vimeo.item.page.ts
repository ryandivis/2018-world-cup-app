import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { VimeoVideo } from '../models/vimeo-video.model';

@Component({
	templateUrl: 'vimeo.item.html'
})
export class VimeoItemPage {
	video: VimeoVideo;

	constructor(navParams: NavParams) {
		this.video = <VimeoVideo>navParams.get('item');
	}
}
