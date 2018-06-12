import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Base64Service } from '../../services/base64.service';

@Injectable()
export class RssFeedsService {
	private http: Http;
	private base64Service: Base64Service;
	private feedList: any;
	private entries: any;
	private baseUrl = 'http://ajax.googleapis.com/ajax/services/feed/load';

	constructor(http: Http, base64Service: Base64Service) {
		this.http = http;
		this.base64Service = base64Service;
		this.feedList = [];
		this.entries = [];
	}

	getFeed(feedId) {
		if (!this.feedList.length) {
			this.getFeedList();
		}

		let url: any = _.find(this.feedList, 'id', feedId);
		let params = {
			v: '1.0',
			q: url.url,
			num: 100
		};
		let requestUrl = `${this.baseUrl}?num=${params.num}&q=${params.q}&v=${params.v}`;
		return this.http.get(requestUrl)
			.map(response => response.json().responseData.feed.entries)
			.map(response => {
				this.entries = response;
				_.each(this.entries, entry => {
					var length = entry.content.indexOf('<p>The post');
					if (length > 0) {
						entry.content = entry.content.substring(0, length);
					}
					entry.hash = this.base64Service.encode(entry.link);
				});
				return this.entries;
			})
	}

	getFeedList() {
		this.entries = [];

		// Wired RSS Feeds
		// http://www.wired.com/about/rss_feeds/
		//

		this.feedList = [{
			id: 1,
			title: 'Top Stories',
			url: 'http://feeds.wired.com/wired/index'
		}, {
			id: 2,
			title: 'Business',
			url: 'http://www.wired.com/category/business/feed/'
		}, {
			id: 3,
			title: 'Design',
			url: 'http://www.wired.com/category/design/feed/'
		}, {
			id: 4,
			title: 'Entertainment',
			url: 'http://www.wired.com/category/underwire/feed/'
		}, {
			id: 5,
			title: 'Tech',
			url: 'http://www.wired.com/category/gear/feed/'
		}, {
			id: 6,
			title: 'Product Reviews',
			url: 'http://www.wired.com/category/reviews/feed/'
		}, {
			id: 7,
			title: 'Science',
			url: 'http://www.wired.com/category/science/science-blogs/feed/'
		}];

		return Promise.resolve(this.feedList);
	};

	getArticle(feedId, hash) {
		if (!this.entries.length) {

			return this.getFeed(feedId)
				.map(response => {
					let entry = _.find(this.entries, 'hash', hash);
					return entry
				});
		}

		let entry = _.find(this.entries, 'hash', hash);
		return Observable.of(entry)
	}
}