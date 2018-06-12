import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { PipesModule } from '../../pipes/pipes.module';

import { ProductsItemPage } from './item/products.item.page';
import { ProductsListPage } from './list/products.list.page';
import { CustomComponentsModule } from '../../components/custom-components.module';

@NgModule({
	imports: [
		IonicModule,
		PipesModule,
		CustomComponentsModule
	],
	declarations: [
		ProductsItemPage,
		ProductsListPage
	],
	entryComponents: [
		ProductsItemPage,
		ProductsListPage
	]
})
export class ProductsModule {

}