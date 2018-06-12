import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

import { MenuController, Nav, Platform } from 'ionic-angular';
import { AngularCalendarPage } from '../pages/angular-calendar/angular-calendar';
import { BadgedTabsPage } from '../pages/badged-tabs/badged-tabs.page';
import { BillboardListPage } from '../pages/billboard/list/billboard.list.page';
// import { BlogspotPage } from '../pages/blogspot/blogspot.page';
import { ChartsListPage } from '../pages/charts-page/list/charts.list.page';
import { ComponentsListPage } from '../pages/components/list/components.list.page';
import { CustomFlashCardPage } from '../pages/custom-flash-card/custom-flash-card.page';
// import { DateTimePage } from '../pages/date-time/date-time.page';
import { DrupalListPage } from '../pages/drupal/list/drupal.list.page';
// import { FabToolbarPage } from '../pages/fab-toolbar/fab-toolbar.page';
import { FirebaseCrudListPage } from '../pages/firebase/list/firebase-crud.list.page';
import { FlickrPhotostreamPage } from '../pages/flickr/photostream/flickr-photostream.page';
import { FontAwesomePage } from '../pages/font-awesome/font-awesome-icons.page';
import { FullCalendarPage } from '../pages/full-calendar/full-calendar';
import { GalleriesPage } from '../pages/galleries/list/galleries.page';
// import { GoogleMapsPage } from '../pages/google-maps/google-maps.page';
import { GooglePlaceAutocompletePage } from '../pages/google-place-autocomplete/google-place-autocomplete.page';
import { HighChartsListPage } from '../pages/highcharts/list/high-charts.list.page';
import { HomePage } from '../pages/home/home.page';
import { I18nPage } from '../pages/i18n-capabilities/i18n.page';
import { InstagramLoginPage } from '../pages/instagram/login/instagram-login.page';
import { Ionic2CalendarPage } from '../pages/ionic2-calendar/ionic2-calendar';
// import { LayoutsListPage } from '../pages/layouts/list/layouts.list.page';
import { LeafletjsPage } from '../pages/leafletjs/leafletjs.page';
import { LocalStorageListPage } from '../pages/local-storage/list/local-storage.list.page';
import { NewsListPage } from '../pages/news/list/news.list.page';
import { OAuthProvidersListPage } from '../pages/oauth/list/oauth-providers.list.page';

import { OAuthService } from '../pages/oauth/oauth.service';
import { OAuthProfilePage } from '../pages/oauth/profile/oauth-profile.page';
import { PinchToZoomPage } from '../pages/pinch-to-zoom/pinch-to-zoom';
import { PouchDbCrudListPage } from '../pages/pouchdb-crud/list/pouchdb-crud.list.page';
import { ProductsListPage } from '../pages/products/list/products.list.page';
import { RSSFeedsPage } from '../pages/rss-feeds/list/rss-feeds.page';
import { SchedulePage } from '../pages/schedule/schedule';
import { SignaturePage } from '../pages/signature/signature.page';
import { SlackPage } from '../pages/slack/slack.page';
import { SlideBoxPage } from '../pages/slide-box/slide-box.page';
import { SqliteListPage } from '../pages/sqlite/list/sqlite.list.page';
import { TinderCardsPage } from '../pages/tinder-cards/tinder-cards.page';
import { TumblrFeedPage } from '../pages/tumblr/tumblr-feed.page';
import { TypiconsPage } from '../pages/typicons/typicons.page';
import { VimeoListPage } from '../pages/vimeo/list/vimeo.list.page';
import { WordpressListPage } from '../pages/wordpress/list/wordpress.list.page';
import { YoutubeListPage } from '../pages/youtube/list/youtube.list.page';
import { LoginPage } from '../pages/login/login';
import { MatchesPage } from '../pages/matches/matches';
import { AwardsPage } from '../pages/awards/awards';
import { GroupsPage } from '../pages/groups/groups';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  wide: boolean = false;
  genericPages;
  integrationPages;
  databasePages;
  thirdpartyPages;
  thirdpartyChartsPages
  calendarPages;
  cssComponentsPages;
  homePage;
  groupsPage;
  matchesPage;
  awardsPage;
  rootPage;

  private platform;
  private menu: MenuController;
  private oauthService: OAuthService;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, menu: MenuController, oauthService: OAuthService, private statusBar: StatusBar, private auth: AuthService) {

    this.menu = menu;
    this.oauthService = oauthService;
    // set up our app
    this.platform = platform;
    this.initializeApp();

    // set our app's pages
    this.homePage = { title: 'Home', component: HomePage, icon: 'home' };
    this.groupsPage = { title: 'Groups', component: GroupsPage, icon: 'home' };
    this.matchesPage = { title: 'Matches', component: MatchesPage };
    this.awardsPage = { title: 'Awards', component: AwardsPage };

    this.genericPages = [
      { title: 'Badged tabs', component: BadgedTabsPage, icon: 'pricetag' },
      // { title: 'DateTime', component: DateTimePage, icon: 'time' },
      { title: 'Galleries', component: GalleriesPage, icon: 'images' },
      // { title: 'Google maps', component: GoogleMapsPage, icon: 'map' },
      { title: 'News', component: NewsListPage, icon: 'paper' },
      { title: 'OAuth', component: OAuthProvidersListPage, icon: 'log-in' },
      { title: 'Products', component: ProductsListPage, icon: 'archive' },
      { title: 'RSS Feeds', component: RSSFeedsPage, icon: 'logo-rss' },
      { title: 'Slides', component: SlideBoxPage, icon: 'swap' },
      { title: 'Pinch to zoom', component: PinchToZoomPage, icon: 'resize', new: true },
    ];

    this.integrationPages = [
      { title: 'Drupal', component: DrupalListPage, icon: 'water' },
      { title: 'Slack', component: SlackPage, icon: 'send' },
      { title: 'Vimeo', component: VimeoListPage, icon: 'logo-vimeo' },
      { title: 'Wordpress', component: WordpressListPage, icon: 'logo-wordpress' },
      { title: 'YouTube', component: YoutubeListPage, icon: 'logo-youtube' },
      { title: 'Instagram', component: InstagramLoginPage, icon: 'logo-instagram' },
      { title: 'Flickr', component: FlickrPhotostreamPage, icon: 'camera' },
      { title: 'Tumblr', component: TumblrFeedPage, icon: 'logo-tumblr' },
      // { title: 'Blogspot', component: BlogspotPage, icon: 'quote' }
    ];

    this.databasePages = [
      { title: 'Firebase', component: FirebaseCrudListPage, icon: 'flame' },
      { title: 'Local storage', component: LocalStorageListPage, icon: 'browsers' },
      { title: 'Pouch/Couch DB', component: PouchDbCrudListPage, icon: 'cloud' },
      { title: 'SQLite', component: SqliteListPage, icon: 'cube' }
    ];

    this.thirdpartyPages = [
      { title: 'Font Awesome', component: FontAwesomePage, icon: 'flag' },
      { title: 'Typicons', component: TypiconsPage, icon: 'bonfire' },
      { title: 'LeafletJS', component: LeafletjsPage, icon: 'navigate' },
      { title: 'Signature', component: SignaturePage, icon: 'done-all', new: true },

      // { title: 'Fab toolbar', component: FabToolbarPage, icon: 'list-box' },
      { title: 'Custom flash card', component: CustomFlashCardPage, icon: 'refresh' },
      { title: 'Tinder cards', component: TinderCardsPage, icon: 'swap' },
      { title: 'i18n', component: I18nPage, icon: 'globe' },
      { title: 'Google places', component: GooglePlaceAutocompletePage, icon: 'locate' }
    ];

    this.calendarPages = [
      { title: 'Angular Calendar', component: AngularCalendarPage, icon: 'calendar', new: true },
      { title: 'Ionic 2 Calendar', component: Ionic2CalendarPage, icon: 'calendar', new: true },
      { title: 'Full Calendar', component: FullCalendarPage, icon: 'calendar', new: true },
      { title: 'NgPrime Schedule', component: SchedulePage, icon: 'calendar', new: true },
    ];

    this.thirdpartyChartsPages = [
      { title: 'Billboard', component: BillboardListPage, icon: 'pie' },
      { title: 'Chart.js', component: ChartsListPage, icon: 'stats' },
      { title: 'HighCharts', component: HighChartsListPage, icon: 'analytics' }
    ];

    this.cssComponentsPages = [
      { title: 'Components', component: ComponentsListPage, icon: 'grid' },
      // { title: 'Layouts', component: LayoutsListPage, icon: 'flower' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
    this.auth.afAuth.authState
      .subscribe(
        user => {
          if (user) {
            this.rootPage = HomePage;
          } else {
            this.rootPage = LoginPage;
          }
        },
        () => {
          this.rootPage = LoginPage;
        }
      );
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let component = page.component;
    if (component === OAuthProvidersListPage && this.oauthService.isAuthorized()) {
      component = OAuthProfilePage;
    }

    this.nav.setRoot(component);
  }

  login() {
    this.menu.close();
    this.auth.signOut();
    this.nav.setRoot(LoginPage);
  }

  logout() {
    this.menu.close();
    this.auth.signOut();
    this.nav.setRoot(HomePage);
  }
}
