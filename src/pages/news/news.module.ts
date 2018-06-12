import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NewsItemPage } from './item/news.item.page';
import { NewsListPage } from './list/news.list.page';
import { PipesModule } from '../../pipes/pipes.module';
import { NewsService } from './news.service';

@NgModule({
	imports: [IonicModule, PipesModule],
	declarations: [
		NewsListPage,
		NewsItemPage
	],
	entryComponents: [
		NewsListPage,
		NewsItemPage
	],
	providers: [NewsService]
})
export class NewsModule {

}