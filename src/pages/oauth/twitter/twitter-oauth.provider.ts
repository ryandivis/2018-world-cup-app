import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { IOathProvider } from '../oauth.provider.interface';
import { Config } from '../../../config';
import * as jsSHA from 'jssha';
import { OAuthProfile } from '../models/oauth-profile.model';

@Injectable()
export class TwitterOauthProvider implements IOathProvider {
	private http: Http;
	private consumerKey: string;
	private consumerSecret: string;

	constructor(http: Http, config: Config) {
		this.http = http;
		this.consumerKey = config.twitter.apiKey;
		this.consumerSecret = config.twitter.apiSecret;
	}

	public getProfile(accessToken: string): Promise<OAuthProfile> {
		let authParams = JSON.parse(accessToken);
		let url = 'https://api.twitter.com/1.1/users/show.json';
		return this.performGetRequest(url, { 'screen_name': authParams.screen_name }, authParams.oauth_token, authParams.oauth_token_secret)
			.then(x => {
				let nameParts = x.name.split(' ');
				let profile: OAuthProfile = {
					firstName: nameParts[0],
					lastName: nameParts[1],
					provider: 'twitter',
					email: 'Not provided by API' // NO email from API
				};
				return profile;
			})
	}

	login(): Promise<string> {
		return new Promise((resolve, reject) => {
			let cordova = (<any>window).cordova;
			if (cordova) {
				if (cordova.InAppBrowser) {
					let redirect_uri = "http://localhost/callback";

					if (typeof jsSHA !== 'undefined') {
						let oauthObject: any = {
							oauth_consumer_key: this.consumerKey,
							oauth_nonce: this.createNonce(10),
							oauth_signature_method: "HMAC-SHA1",
							oauth_timestamp: Math.round((new Date()).getTime() / 1000.0),
							oauth_version: "1.0"
						};
						let signatureObj = this.createSignature('POST', "https://api.twitter.com/oauth/request_token", oauthObject, { oauth_callback: redirect_uri }, this.consumerSecret);

						let data = "oauth_callback=" + encodeURIComponent(redirect_uri);
						let headers = new Headers();
						headers.append('Content-Type', 'application/x-www-form-urlencoded');
						headers.append('Authorization', signatureObj.authorization_header);

						this.http
							.post("https://api.twitter.com/oauth/request_token", data, {
								headers: headers
							})
							.toPromise()
							.then(
								(requestTokenResult: any) => {
									let requestTokenParameters = (requestTokenResult._body).split("&");
									let parameterMap: any = {};
									for (let i = 0; i < requestTokenParameters.length; i++) {
										parameterMap[requestTokenParameters[i].split("=")[0]] = requestTokenParameters[i].split("=")[1];
									}
									if (parameterMap.hasOwnProperty("oauth_token") === false) {
										reject("Oauth request token was not received");
									}
									let browserRef = cordova.InAppBrowser.open('https://api.twitter.com/oauth/authenticate?oauth_token=' + parameterMap.oauth_token, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
									browserRef.addEventListener('loadstart', (event) => {
										if ((event.url).indexOf(redirect_uri) === 0) {
											let callbackResponse = (event.url).split("?")[1];
											let responseParameters = (callbackResponse).split("&");
											let parameterMap: any = {};
											for (let i = 0; i < responseParameters.length; i++) {
												parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
											}
											if (parameterMap.hasOwnProperty("oauth_verifier") === false) {
												reject("Browser authentication failed to complete.  No oauth_verifier was returned");
											}
											delete oauthObject.oauth_signature;
											oauthObject.oauth_token = parameterMap.oauth_token;
											let signatureObj = this.createSignature("POST", "https://api.twitter.com/oauth/access_token", oauthObject, { oauth_verifier: parameterMap.oauth_verifier }, this.consumerSecret);

											let headers = new Headers();
											headers.append('Content-Type', 'application/x-www-form-urlencoded');
											headers.append('Authorization', signatureObj.authorization_header);

											this.http
												.post(`https://api.twitter.com/oauth/access_token?oauth_verifier=${parameterMap.oauth_verifier}`, null, {
													headers: headers
												})
												.toPromise()
												.then((result: any) => {
													let accessTokenParameters = result._body.split("&");
													let parameterMap = {};
													for (let i = 0; i < accessTokenParameters.length; i++) {
														parameterMap[accessTokenParameters[i].split("=")[0]] = accessTokenParameters[i].split("=")[1];
													}
													if (parameterMap.hasOwnProperty("oauth_token_secret") === false) {
														reject("Oauth access token was not received");
													}
													resolve(JSON.stringify(parameterMap));
													setTimeout(() => {
														browserRef.close();
													}, 10)
												}, (error) => {
													reject(error);
													setTimeout(() => {
														browserRef.close();
													}, 10)
												});
										}
									});
									browserRef.addEventListener('exit', (event) => {
										reject("The sign in flow was canceled");
									});
								},
								(error) => {
									reject(error);
								})
					} else {
						reject("Missing jsSHA JavaScript library");
					}
				} else {
					reject("Could not find InAppBrowser plugin");
				}
			} else {
				reject("Cannot authenticate via a web browser");
			}
		});
	}

	private performGetRequest(url, neededParams, oauthKey, oauthSecret) {
		if (typeof(neededParams) === 'undefined') neededParams = {};
		let parameters = neededParams;
		let signature = this.createTwitterSignature('GET', url, parameters, this.consumerKey, this.consumerSecret, oauthKey, oauthSecret);
		let headers = new Headers({ 'Accept': 'application/json' });
		headers.append('Authorization', signature['authorization_header']);
		let params = new URLSearchParams();
		for (var key in parameters) {
			params.set(key, parameters[key]);
		}
		return this.http.get(url, { search: params, headers: headers })
			.map(response => response.json())
			.toPromise();
	}

	private createTwitterSignature(method, url, bodyParameters, clientId, clientSecret, oauthKey, oauthSecret) {
		var oauthObject = {
			oauth_consumer_key: clientId,
			oauth_nonce: this.createNonce(10),
			oauth_signature_method: "HMAC-SHA1",
			oauth_token: oauthKey,
			oauth_timestamp: Math.round((new Date()).getTime() / 1000.0),
			oauth_version: "1.0"
		};

		var signatureObj = this.createSignature(method, url, oauthObject, bodyParameters, clientSecret, oauthSecret);
		return signatureObj;
	}

	private createSignature(method, endPoint, headerParameters, bodyParameters, secretKey, tokenSecret?: string): any {
		if (typeof jsSHA !== "undefined") {
			let headerAndBodyParameters = Object.assign({}, headerParameters)

			if (bodyParameters) {
				let bodyParameterKeys = Object.keys(bodyParameters);
				for (let i = 0; i < bodyParameterKeys.length; i++) {
					headerAndBodyParameters[bodyParameterKeys[i]] = this.escapeSpecialCharacters(bodyParameters[bodyParameterKeys[i]]);
				}
			}

			let signatureBaseString = method + "&" + encodeURIComponent(endPoint) + "&";
			let headerAndBodyParameterKeys = (Object.keys(headerAndBodyParameters)).sort();
			for (let i = 0; i < headerAndBodyParameterKeys.length; i++) {
				if (i == headerAndBodyParameterKeys.length - 1) {
					signatureBaseString += encodeURIComponent(headerAndBodyParameterKeys[i] + "=" + headerAndBodyParameters[headerAndBodyParameterKeys[i]]);
				} else {
					signatureBaseString += encodeURIComponent(headerAndBodyParameterKeys[i] + "=" + headerAndBodyParameters[headerAndBodyParameterKeys[i]] + "&");
				}
			}
			let oauthSignatureObject = new jsSHA(signatureBaseString, "TEXT");

			let encodedTokenSecret = '';
			if (tokenSecret) {
				encodedTokenSecret = encodeURIComponent(tokenSecret);
			}


			let getHMAC = <any>oauthSignatureObject.getHMAC;
			let hmac = getHMAC(`${encodeURIComponent(secretKey)}&${encodedTokenSecret}`, "TEXT", "SHA-1", "B64");
			headerParameters.oauth_signature = encodeURIComponent(hmac);
			let headerParameterKeys = Object.keys(headerParameters);
			let authorizationHeader = 'OAuth ';
			for (let i = 0; i < headerParameterKeys.length; i++) {
				if (i == headerParameterKeys.length - 1) {
					authorizationHeader += headerParameterKeys[i] + '="' + headerParameters[headerParameterKeys[i]] + '"';
				} else {
					authorizationHeader += headerParameterKeys[i] + '="' + headerParameters[headerParameterKeys[i]] + '",';
				}
			}
			return {
				signature_base_string: signatureBaseString,
				authorization_header: authorizationHeader,
				signature: headerParameters.oauth_signature
			};
		} else {
			return { fail: "Missing jsSHA JavaScript library" };
		}
	}

	private createNonce(length) {
		let text = "";
		let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for (let i = 0; i < length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}

	private escapeSpecialCharacters(string) {
		let tmp = encodeURIComponent(string);
		tmp = tmp.replace(/!/g, "%21");
		tmp = tmp.replace(/'/g, "%27");
		tmp = tmp.replace(/\(/g, "%28");
		tmp = tmp.replace(/\)/g, "%29");
		tmp = tmp.replace(/\*/g, "%2A");
		return tmp;
	}
}