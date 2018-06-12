import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { OAuthService } from '../../pages/oauth/oauth.service';

import { OAuthProfilePage } from './profile/oauth-profile.page';
import { OAuthProvidersListPage } from './list/oauth-providers.list.page';
import { GoogleOauthProvider } from './google/google-oauth.provider';
import { FacebookOauthProvider } from './facebook/facebook-oauth.provider';
import { GithubOauthProvider } from './github/github-oauth.provider';
import { LinkedInOauthProvider } from './linkedin/linkedin-oauth.provider';
import { TwitterOauthProvider } from './twitter/twitter-oauth.provider';

@NgModule({
	imports: [IonicModule],
	declarations: [
		OAuthProfilePage,
		OAuthProvidersListPage
	],
	entryComponents: [
		OAuthProfilePage,
		OAuthProvidersListPage
	],
	providers: [
		OAuthService,
		FacebookOauthProvider,
		GoogleOauthProvider,
		GithubOauthProvider,
		LinkedInOauthProvider,
		TwitterOauthProvider
	]
})
export class OAuthModule {

}