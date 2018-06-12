import { Component } from '@angular/core';
import { InAppBrowserService } from '../../services/in-app-browser.service';
import { TumblrService } from './tumblr.service';

@Component({
	templateUrl: './tumblr-feed.page.html'
})
export class TumblrFeedPage {
	entries: any[] = [];

	constructor(service: TumblrService, private browser: InAppBrowserService) {
		service.getFeed()
			.subscribe(response => this.entries = response);
	};

	goToPost(item) {
		this.browser.open(item.post_url);
	}
}
