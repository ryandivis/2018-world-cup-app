import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { IOathProvider } from '../oauth.provider.interface';
import { OAuthProfile } from '../models/oauth-profile.model';
import { Config } from '../../../config';

interface ILoginResponse {
	access_token: string;
}

interface IProfileResponse {
	name: string;
	email: string;
}

@Injectable()
export class GithubOauthProvider implements IOathProvider {
	private http: Http;
	private config;

	constructor(http: Http, config: Config) {
		this.http = http;
		this.config = config.github;
	}

	login(): Promise<string> {
		return new Promise<string>((resolve, reject) => {

			if ((<any>window).cordova) {
				if ((<any>window).cordova.InAppBrowser) {
					let redirect_uri = 'http://localhost/callback';
					let url = `https://github.com/login/oauth/authorize?client_id=${this.config.appId}&redirect_uri=${redirect_uri}&scope=${this.config.scope.join(',')}`;
					let browserRef = (<any>window).cordova.InAppBrowser.open(url, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
					browserRef.addEventListener('loadstart', (event) => {
						if ((event.url).indexOf(redirect_uri) === 0) {
							let requestToken = (event.url).split('code=')[1];

							let data = `client_id=${this.config.appId}&client_secret=${this.config.appSecret}&redirect_uri=${redirect_uri}&code=${requestToken}`;
							let headers = new Headers();
							headers.append('Content-Type', 'application/x-www-form-urlencoded');
							headers.append('accept', 'application/json');

							return this.http.post('https://github.com/login/oauth/access_token', data, {
								headers: headers
							})
								.map(x => x.json())
								.toPromise()
								.then((data: ILoginResponse) => {
									console.log('=================================');
									console.log(data.access_token);
									console.log('=================================');

									resolve(data.access_token);
									setTimeout(() => {
										browserRef.close();
									}, 10);
								}, (data) => {
									console.log('error', data);
									reject('Problem authenticating');
									setTimeout(() => {
										browserRef.close();
									}, 10);
								});
						}
					});
					browserRef.addEventListener('exit', (event) => {
						reject('The sign in flow was canceled');
					});
				} else {
					reject('Could not find InAppBrowser plugin');
				}
			} else {
				reject('Cannot authenticate via a web browser');
			}
		});
	}

	getProfile(accessToken): Promise<OAuthProfile> {
		let query = `access_token=${accessToken}&format=json`;
		let url = `${this.config.apiUrl}user?${query}`;

		return this.http.get(url)
			.map(x => <IProfileResponse>x.json())
			.map((x: IProfileResponse) => {

				console.log(x);
				let nameParts = x.name.split(' ');
				let profile: OAuthProfile = {
					firstName: nameParts[0],
					lastName: nameParts[1],
					email: x.email,
					provider: 'github'
				};
				return profile;
			})
			.toPromise();
	}
}