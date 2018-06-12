import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { News } from '../models/news.model';

@Component({
	templateUrl: './news.item.html'
})
export class NewsItemPage {
	post: News;

	constructor(navParams: NavParams) {
		this.post = <News>navParams.get('item');
	}
}
