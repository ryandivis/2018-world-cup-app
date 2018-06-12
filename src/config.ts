import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
	public drupalApiUrl = 'http://demo.titaniumtemplates.com/drupal/rest/views/rest_api';
	public youtube = {
		apiUrl: 'https://www.googleapis.com/youtube/v3/',
		key: 'AIzaSyDael5MmCQa1GKQNKQYypmBeB08GATgSEo',
		itemsPerPage: 20,
		username: 'google'
	};
	public vimeo = {
		userId: 'user13092665',
		accessToken: 'd995ffff0228beba7c9716c3ee0d4add',
		apiUrl: 'https://api.vimeo.com/users/',
		itemsPerPage: 20
	};
	public newsUrl = 'http://skounis.s3.amazonaws.com/mobile-apps/barebone-glossy/news.json';
	public productsUrl = 'http://skounis.s3.amazonaws.com/mobile-apps/barebone-glossy/products.json';
	public facebook = {
		apiUrl: 'https://graph.facebook.com/v2.3/',
		appId: '927897987270774',
		scope: ['email']
	};
	public google = {
		apiUrl: 'https://www.googleapis.com/oauth2/v3/',
		appId: '400671186930-m07eu77bm43tgr30p90k6b9e1qgsva4p.apps.googleusercontent.com',
		scope: ['email']
	};
	public github = {
		apiUrl: 'https://api.github.com/',
		appId: 'ad0b24caa066f59d4971',
		appSecret: '2f1ecf23ebb9ba28332203a38115c90ed2e0a3fe',
		scope: ['user']
	};
	public twitter = {
		apiKey: 'wXRPbDKzyLXOy4etLq4fNqu8M',
		apiSecret: '1Bi6DGM98yc9MToSLstGLFaB2tvHOLkBrBBYm8WWI2fTKl0gWX'
	};
	public linkedin = {
		apiUrl: 'https://api.linkedin.com/v1/',
		accessTokenUrl: 'https://www.linkedin.com/oauth/v2/accessToken',
		appId: '86ysxssoycble9',
		appSecret: 'sy9uHc0EIqG4fe6i',
		scope: ['r_basicprofile', 'r_emailaddress'],
		redirectUrl: 'http://localhost/callback'
	};

	static instagramAppId = 'ab4ccebff87a46e789e231bed83685e4';
	static slackIncomingWebHookUrl = 'https://hooks.slack.com/services/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';

	static firebase = {
		apiKey: "AIzaSyD5WMjg0RHOhD31B4tuhOoXZ5Vj5WzppBY",
    authDomain: "we-remember-world-cup.firebaseapp.com",
    databaseURL: "https://we-remember-world-cup.firebaseio.com",
    projectId: "we-remember-world-cup",
    storageBucket: "we-remember-world-cup.appspot.com",
    messagingSenderId: "105715171627"
	};

	// CouchDB/PouchDB/Cloudand
	// Enable CORS - https://cl.ly/3U2s0r3u3e0J
	// key/password - generate here https://cl.ly/2y0v0Y3P1E1k
	static couchdb = {
		key: 'frormelfulessetoureanyue',
		password: '50dd799df0494c7feb75bd184b2f4149725892d7',
		local: 'ionic-toolkit-db',
		remote: 'https://6e299356-e39c-4549-9dd5-7161481481f8-bluemix.cloudant.com/ionic-toolkit-db'
	};

	static flickr = {
		key: 'bdbbafdc270d29a90c8dc33fac42e4a6',
		endpoint: 'https://api.flickr.com/services/rest/',
		user_id: '126545133@N08'
	};

	static thumblr = {
		blog_url: 'build.tumblr.com',
		api_key: 'SdN1SYWaD21YCFvsHHWmoDCdEZoVRBq1D5JIsuDn2XyBQi0u6o'
	};

	static blogspot = {
		apiKey: 'AIzaSyDgCZWJs358ZdDkLRJJn4bafY72iPiPrvk',
		blogId: '6673509330961228835'
	}
}
