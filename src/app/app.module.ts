import { AgmCoreModule } from '@agm/core';
import { ErrorHandler, NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
// import { CalendarModule } from 'angular-calendar';
import { AngularFireModule } from 'angularfire2';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TranslateLoader, TranslateStaticLoader } from 'ng2-translate/src/translate.service';
// import { CustomComponentsModule } from '../components/custom-components.module';
import { Config } from '../config';
// import { AngularCalendarPageModule } from '../pages/angular-calendar/angular-calendar.module';
// import { BadgedTabsModule } from '../pages/badged-tabs/badged-tabs.module';
// import { BillboardPageModule } from '../pages/billboard/billboard.module';
// import { BlogspotModule } from '../pages/blogspot/blogspot.module';
// import { ChartsPageModule } from '../pages/charts-page/charts-page.module';
// import { ComponentsModule } from '../pages/components/components.module';
// import { CustomFlashCardModule } from '../pages/custom-flash-card/custom-flash-card.module';
// import { DateTimeModule } from '../pages/date-time/date-time.module';
// import { DrupalModule } from '../pages/drupal/drupal.module';
// import { FabToolbarModule } from '../pages/fab-toolbar/fab-toolbar.module';
// import { FirebaseCrudModule } from '../pages/firebase/firebase-crud.module';
// import { FlickrModule } from '../pages/flickr/flickr.module';
import { FontAwesomeIconsModule } from '../pages/font-awesome/font-awesome-icons.module';
// import { FullCalendarPageModule } from '../pages/full-calendar/full-calendar.module';
// import { GalleriesModule } from '../pages/galleries/galleries.module';
// import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
// import { GooglePlaceAutocompleteModule } from '../pages/google-place-autocomplete/google-place-autocomplete.module';
// import { HighChartsDemoModule } from '../pages/highcharts/highcharts-demo.module';
import { HomeModule } from '../pages/home/home.module';
// import { InstagramModule } from '../pages/instagram/instagram.module';
// import { Ionic2CalendarPageModule } from '../pages/ionic2-calendar/ionic2-calendar.module';
// import { LayoutsModule } from '../pages/layouts/layouts.module';
// import { LeafletjsModule } from '../pages/leafletjs/leafletjs.module';
// import { LocalStorageModule } from '../pages/local-storage/local-storage.module';
// import { NewsModule } from '../pages/news/news.module';
import { OAuthModule } from '../pages/oauth/oauth.module';
// import { PinchToZoomPageModule } from '../pages/pinch-to-zoom/pinch-to-zoom.module';
// import { PouchDbCrudModule } from '../pages/pouchdb-crud/pouchdb-crud.module';
// import { ProductsModule } from '../pages/products/products.module';
// import { RssFeedsModule } from '../pages/rss-feeds/rss-feeds.module';
// import { SchedulePageModule } from '../pages/schedule/schedule.module';
// import { SignatureModule } from '../pages/signature/signature.module';
// import { SlackModule } from '../pages/slack/slack.module';
// import { SlideBoxModule } from '../pages/slide-box/slide-box.module';
// import { SqliteModule } from '../pages/sqlite/sqlite.module';
// import { TinderCardsModule } from '../pages/tinder-cards/tinder-cards.module';
// import { TumblrModule } from '../pages/tumblr/tumblr.module';
// import { TypiconsModule } from '../pages/typicons/typicons.module';
// import { VimeoModule } from '../pages/vimeo/vimeo.module';
// import { WordpressModule } from '../pages/wordpress/wordpress.module';
// import { YoutubeModule } from '../pages/youtube/youtube.module';
// import { Base64Service } from '../services/base64.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { MyApp } from './app.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AwardsPageModule } from '../pages/awards/awards.module';
import { GroupsPageModule } from '../pages/groups/groups.module';
import { MatchesPageModule } from '../pages/matches/matches.module';
import { LoginPageModule } from '../pages/login/login.module';
import { SignupPageModule } from '../pages/signup/signup.module';

export function createTranslateLoader(http: Http) {
	return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
	declarations: [
    MyApp
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpModule,
		IonicStorageModule.forRoot(),
		IonicModule.forRoot(MyApp),
		AgmCoreModule.forRoot(),
		TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory: (createTranslateLoader),
			deps: [Http]
		}),
		AngularFireModule.initializeApp(Config.firebase),
		AngularFirestoreModule.enablePersistence(),
		// LeafletModule.forRoot(),
		// CalendarModule.forRoot(),
		// CustomComponentsModule,
		// ComponentsModule,
		// BadgedTabsModule,
		// NewsModule,
		// DateTimeModule,
		// DrupalModule,
		HomeModule,
		// LocalStorageModule,
		OAuthModule,
		// ProductsModule,
		// SlideBoxModule,
		// SqliteModule,
		// VimeoModule,
		// WordpressModule,
		// YoutubeModule,
		// RssFeedsModule,
		// GalleriesModule,
		// GoogleMapsModule,
		// GooglePlaceAutocompleteModule,
		// CustomFlashCardModule,
		// FabToolbarModule,
		// ChartsPageModule,
		// TinderCardsModule,
		// LayoutsModule,
		// InstagramModule,
		// SlackModule,
		// FirebaseCrudModule,
		// PouchDbCrudModule,
		// FlickrModule,
		// TumblrModule,
		// BlogspotModule,
		// HighChartsDemoModule,
		// FontAwesomeIconsModule,
		// SignatureModule,

		// TypiconsModule,

		// BillboardPageModule,
		// AngularCalendarPageModule,
		// SchedulePageModule,
		// FullCalendarPageModule,
		// Ionic2CalendarPageModule,
		// LeafletjsModule,
		// PinchToZoomPageModule,
    NgxErrorsModule,
    AwardsPageModule,
    GroupsPageModule,
    MatchesPageModule,
    LoginPageModule,
    SignupPageModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
    MyApp
	],
	providers: [
		Config,
		// Base64Service,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
    AngularFireAuth,
    AuthService,
    StatusBar,
    FirebaseService
	]
})
export class AppModule {
}
