import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ProductsService } from '../products.service';
import { Product } from '../models/product.model';
import { ProductsItemPage } from '../item/products.item.page';

@Component({
	templateUrl: 'products.list.html',
	providers: [ProductsService]
})
export class ProductsListPage implements OnInit {
	private service: ProductsService;
	private nav: NavController;

	public products: Product[];

	constructor(service: ProductsService, nav: NavController) {
		this.service = service;
		this.nav = nav;
	}

	ngOnInit(): void {
		this.service.getProducts()
			.subscribe(posts => {
				this.products = posts;
			});
	}

	public itemTapped(item) {
		this.nav.push(ProductsItemPage, {
			item: item
		});
	}
}
