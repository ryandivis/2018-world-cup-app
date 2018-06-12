import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../config';
import { Observable } from 'rxjs';

@Injectable()
export class SlackService {
	private http: Http;

	constructor(http: Http) {
		this.http = http;
	}

	post(message): Observable<any> {
		let payload = {
			text: message
		};
		return this.http
			.post(Config.slackIncomingWebHookUrl, JSON.stringify(payload));
	}
}