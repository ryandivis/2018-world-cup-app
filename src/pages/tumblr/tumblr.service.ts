import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../../config';

@Injectable()
export class TumblrService {
	constructor(private http: Http) {
	}

	getFeed(): Observable<any[]> {
		let url = 'http://api.tumblr.com/v2/blog/%blog_url%/posts';
		url = url.replace('%blog_url%', Config.thumblr.blog_url);

		url +=
			'?api_key=' + Config.thumblr.api_key +
			'&limit=' + 20;

		return this.http.get(url)
			.map(x => x.json())
			.map(x => x.response.posts);
	}
}