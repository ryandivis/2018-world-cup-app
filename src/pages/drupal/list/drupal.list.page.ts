import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DrupalService } from '../drupal.service';
import { DrupalItemPage } from '../item/drupal.item.page';
import { DrupalPost } from '../models/drupal-post.model';

@Component({
	templateUrl: 'drupal.list.html',
	providers: [DrupalService]
})
export class DrupalListPage implements OnInit {
	private drupal: DrupalService;
	private nav: NavController;

	public posts: DrupalPost[];

	constructor(drupal: DrupalService, nav: NavController) {
		this.drupal = drupal;
		this.nav = nav;
	}

	ngOnInit(): void {
		this.drupal.getPosts()
			.subscribe(posts => {
				this.posts = posts;
			});
	}

	public itemTapped(item) {
		this.nav.push(DrupalItemPage, {
			item: item
		});
	}
}
