import { Component } from '@angular/core';
import { RssFeedsService } from '../rss-feeds.service';
import { NavParams, ActionSheetController } from 'ionic-angular';

@Component({
	templateUrl: 'rss-article.html'
})
export class RSSArticlePage {
	actionSheetCtrl: ActionSheetController;
	articleHash: any;
	feedId: number;
	article: any;

	constructor(rssFeedsService: RssFeedsService, navParams: NavParams, actionSheetCtrl: ActionSheetController) {
		this.actionSheetCtrl = actionSheetCtrl;
		this.articleHash = navParams.get('hash');
		this.feedId = navParams.get('id');
		rssFeedsService.getArticle(this.feedId, this.articleHash).subscribe(
			article => this.article = article
		)
	};

	showInBrowser() {
		window.open(this.article.link, '_system');
	};

	showActions() {
		let actionSheet = this.actionSheetCtrl.create({
			title: 'Actions',
			buttons: [
				{
					text: 'Open in browser',
					handler: () => {
						this.showInBrowser();
					}
				}, {
					text: 'Share',
					handler: () => {
						console.log('Share clicked');
					}
				}
			]
		});
		actionSheet.present();
	}
}
