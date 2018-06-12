import { Injectable } from '@angular/core';
import { Config } from '../../config';
import { OauthCordova } from 'ng2-cordova-oauth/platform/cordova'
import { Instagram } from 'ng2-cordova-oauth/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class InstagramService {
	http: Http;
	oauth: OauthCordova = new OauthCordova();
	instagramProvider: Instagram;

	constructor(http: Http) {
		this.http = http;
		this.instagramProvider = new Instagram({ clientId: Config.instagramAppId, appScope: ['basic'] });
	}

	isAuthorized() {
		return !!localStorage.getItem('instagramAccessToken');
	}

	login() {
		return this.oauth.logInVia(this.instagramProvider).then(result => {
			console.log('Success');
			console.log(result);

			localStorage.setItem('instagramAccessToken', result['access_token']);
			return result;
		}, error => {
			console.log('Error');
			console.log(error);

			return error;
		});
	}

	logout() {
		localStorage.removeItem('instagramAccessToken');
	}

	getRecentMedia(): Observable<any[]> {
		let recentMediaUrl = 'https://api.instagram.com/v1/users/self/media/recent';
		let url = this.buildUrl(recentMediaUrl);
		return this.http.get(url)
			.map(x => x.json())
			.map(response => {
				return response.data;
			});
	}

	getAccessToken() {
		return localStorage.getItem('instagramAccessToken');
	}

	buildUrl(url) {
		let accessToken = localStorage.getItem('instagramAccessToken');
		return url + '?access_token=' + accessToken;
	}

}