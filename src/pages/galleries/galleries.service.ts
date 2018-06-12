import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class GalleriesService {
	private http: Http;
	private result: any;

	constructor(http: Http) {
		this.http = http;
		this.result = [];
	}

	all() {
		let url = 'http://skounis.s3.amazonaws.com/mobile-apps/barebone-glossy/galleries.json';
		return this.http.get(url)
			.map(response => this.result = response.json().result)
	}

	get(galleryId) {
		for (let i = 0; i < this.result.length; i++) {
			if (this.result[i].id === galleryId) {
				return Observable.of(this.result[i]);
			}
		}
		return Observable.of(null);
	}
}