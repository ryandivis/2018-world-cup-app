import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { InstagramService } from '../instagram.service';
import { Media } from '../models/media.model';

@Component({
	templateUrl: 'instagram-recent-media.html',
	providers: [InstagramService]
})
export class InstagramRecentMediaPage implements OnInit {

	platform: Platform;
	instagramService: InstagramService
	mediaList: Media[];

	constructor(platform: Platform, instagramService: InstagramService) {
		this.platform = platform;
		this.instagramService = instagramService;
	}

	ngOnInit() {
		this.getRecentMedia(false);
	}

	getRecentMedia(refresher) {
		this.instagramService.getRecentMedia()
			.subscribe(list => {
				if (refresher) {
					refresher.complete();
				}
				this.mediaList = list;
			});

	}

	doRefresh(refresher) {
		this.getRecentMedia(refresher);
	}
}
