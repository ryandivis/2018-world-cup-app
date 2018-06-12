import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../config';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FlickrService {
	private http: Http;

	constructor(http: Http) {
		this.http = http;
	}

	getPhotos(): Observable<any[]> {
		let extras = 'description, url_s, url_m, url_l';
		let url = Config.flickr.endpoint +
			'?method=flickr.people.getPublicPhotos&api_key=' + Config.flickr.key +
			'&user_id=' + Config.flickr.user_id +
			'&extras=' + extras +
			'&format=json&nojsoncallback=1';
		return this.http.get(url)
			.map(x => x.json())
			.map(x => x.photos.photo);
	}

	getPhotoInfo(photoId): Observable<any> {
		let url = Config.flickr.endpoint + '?' +
			'method=flickr.photos.getInfo' +
			'&api_key=' + Config.flickr.key +
			'&photo_id=' + photoId +
			'&format=json&nojsoncallback=1';

		return this.http.get(url)
			.map(x => x.json())
			.map(x => x.photo);
	}
}