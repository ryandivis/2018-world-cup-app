import { Component } from '@angular/core';
import { RssFeedsService } from '../rss-feeds.service';
import { NavController } from 'ionic-angular';
import { RSSFeedPage } from '../item/rss-feed.page';

@Component({
	templateUrl: 'rss-feeds.html'
})
export class RSSFeedsPage {
	rssFeeds: any;
	private nav: NavController;

	constructor(rssFeedsService: RssFeedsService, nav: NavController) {
		this.nav = nav;
		rssFeedsService.getFeedList().then(data => this.rssFeeds = data);
	}

	public goToFeed(id) {
		this.nav.push(RSSFeedPage, {
			id: id - 1
		});
	}
}
