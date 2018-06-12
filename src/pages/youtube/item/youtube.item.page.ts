import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { YoutubeVideo } from '../models/youtube-video.model';

@Component({
	templateUrl: 'youtube.item.html'
})
export class YoutubeItemPage {
	video: YoutubeVideo;

	constructor(navParams: NavParams) {
		this.video = <YoutubeVideo>navParams.get('item');
	}
}
