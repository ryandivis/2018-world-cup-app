import { Component } from '@angular/core';
import { RssFeedsService } from '../rss-feeds.service';
import { NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { RSSArticlePage } from '../article/rss-article.page';

@Component({
	templateUrl: 'rss-feed.html'
})
export class RSSFeedPage {
	private nav: NavController;
	rssFeeds: any;
	rssFeedId: number;
	entries: any;

	constructor(rssFeedsService: RssFeedsService, navParams: NavParams, nav: NavController) {
		this.nav = nav;
		this.rssFeedId = navParams.get('id');
		rssFeedsService.getFeed(this.rssFeedId).subscribe(
			response => this.entries = response
		)
	};

	goToArticle(hash) {
		this.nav.push(RSSArticlePage, {
			hash: hash,
			id: this.rssFeedId
		});
	}
}
