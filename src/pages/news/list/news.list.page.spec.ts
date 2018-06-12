import { async, ComponentFixture, TestModuleMetadata, TestBed } from '@angular/core/testing';
import { TestUtils } from '../../../test';
import { NewsListPage } from './news.list.page';
import { NewsService } from '../news.service';
import { BehaviorSubject } from 'rxjs';
import { NavController } from 'ionic-angular';
import { NavMock } from '../../../mocks';
import { NewsItemPage } from '../item/news.item.page';

describe('NewsList page', () => {
	let fixture: ComponentFixture<NewsListPage> = null;
	let subject = new BehaviorSubject([]);

	let moduleMetadata: TestModuleMetadata = {
		providers: [
			{ provide: NewsService, useValue: { getPosts: () => subject } }
		]
	};

	beforeEach(async(() => TestUtils.beforeEachCompiler([NewsListPage], moduleMetadata).then(compiled => {
		fixture = compiled.fixture;
	})));

	it('should display the list of news', async(() => {
		// Arrange
		let expectedTitle = 'Test news title';

		subject.next([{
			title: expectedTitle
		}, {
			title: 'Another news title'
		}]);

		// Act
		fixture.detectChanges();

		// Assert
		let items = fixture.debugElement.nativeElement.getElementsByTagName('ion-item');
		expect(items.length).toBe(2);

		expect(items[0].getElementsByTagName('h2')[0].innerText).toBe(expectedTitle);
	}));

	it('should navigate to NewsItem page when click on news in the list', async(() => {
		// Arrange
		let expectedNews = {
			title: 'Test news title'
		};
		subject.next([expectedNews, {
			title: 'Another news title'
		}]);

		let nav = <NavMock>TestBed.get(NavController);

		// Act
		fixture.detectChanges();

		let items = fixture.debugElement.nativeElement.getElementsByTagName('ion-item');
		items[0].click();

		// Assert
		expect(nav.page).toBe(NewsItemPage);
		expect(nav.params).toEqual({
			item: expectedNews
		});
	}));
});