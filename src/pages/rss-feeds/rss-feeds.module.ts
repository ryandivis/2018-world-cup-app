import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { RSSFeedPage } from './item/rss-feed.page';
import { RSSFeedsPage } from './list/rss-feeds.page';
import { RssFeedsService } from './rss-feeds.service';
import { RSSArticlePage } from './article/rss-article.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
	declarations: [
		RSSFeedsPage,
		RSSFeedPage,
		RSSArticlePage
	],
	entryComponents: [
		RSSFeedsPage,
		RSSFeedPage,
		RSSArticlePage
	],
	imports: [IonicModule, PipesModule],
	providers: [RssFeedsService]
})
export class RssFeedsModule {

}