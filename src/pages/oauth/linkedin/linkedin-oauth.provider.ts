import { Injectable } from '@angular/core';
import { IOathProvider } from '../oauth.provider.interface';
import { OAuthProfile } from '../models/oauth-profile.model';
import { OauthCordova } from 'ng2-cordova-oauth/platform/cordova'
import { Config } from '../../../config';
import { Http } from '@angular/http';
import { LinkedIn } from 'ng2-cordova-oauth/core';

interface ILoginResponse {
	code: string;
}

@Injectable()
export class LinkedInOauthProvider implements IOathProvider {
	private http: Http;
	private config: Config;
	private oauth: OauthCordova = new OauthCordova();
	private linkedIn: LinkedIn;

	constructor(http: Http, config: Config) {
		console.log('linked in oauth provider');
		this.http = http;
		this.config = config;
		this.linkedIn = new LinkedIn({ clientId: config.linkedin.appId, appScope: config.linkedin.scope });
	}

	login(): Promise<string> {
		console.log('Log in');
		return this.oauth.logInVia(this.linkedIn)
			.then((x: ILoginResponse) => {
				console.log('code:', JSON.stringify(x));
				return this.getToken(x.code);
			});
	}

	private getToken(code: string): Promise<string> {
		let config = this.config.linkedin;
		let url = `${config.accessTokenUrl}?grant_type=authorization_code&code=${code}&redirect_uri=${config.redirectUrl}&client_id=${config.appId}&client_secret=${config.appSecret}`;
		console.log('url: ', url);
		return this.http.post(url, null)
			.map(x => x.json())
			.map(x => {
				console.log('token:', JSON.stringify(x));
				return <string>x.access_token;
			})
			.toPromise();
	}

	getProfile(accessToken: string): Promise<OAuthProfile> {
		let query = `oauth2_access_token=${accessToken}`;
		let url = `${this.config.linkedin.apiUrl}people/~:(id,firstName,lastName,emailAddress)?format=json&${query}`;

		console.log(url);
		return this.http.get(url)
			.map(x => x.json())
			.map(x => {
				console.log('x', JSON.stringify(x));
				return {
					firstName: x.firstName,
					lastName: x.lastName,
					email: x.emailAddress,
					provider: 'linkedin'
				};
			})
			.toPromise();
	}
}
