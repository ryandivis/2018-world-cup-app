import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { isCordovaAvailable } from '../../../services/is-cordova-available';
import { InstagramService } from '../instagram.service';
import { InstagramRecentMediaPage } from '../recent-media/instagram-recent-media.page';

@Component({
	templateUrl: 'instagram-login.html',
})
export class InstagramLoginPage implements OnInit {

	platform: Platform;
	instagramService: InstagramService;
	accessToken: any;
	isAuthorized: boolean;
	nav: NavController;

	constructor(platform: Platform, instagramService: InstagramService, nav: NavController) {
		this.nav = nav;
		this.platform = platform;
		this.instagramService = instagramService;
		this.isAuthorized = false;
	}

	ngOnInit() {
		this.isAuthorized = this.instagramService.isAuthorized();
		this.accessToken = this.instagramService.getAccessToken();
	}

	showRecentMedia() {
		this.nav.push(InstagramRecentMediaPage);
	}

	logout() {
		this.instagramService.logout();
		this.accessToken = null;
		this.isAuthorized = false;
	}

	login() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.instagramService.login()
			.then((result) => {
				if (result['access_token']) {
					this.accessToken = result['access_token'];
					this.isAuthorized = true;
				} else {
					alert(result);
					this.accessToken = null;
					this.isAuthorized = false;
				}
			});
	}
}
