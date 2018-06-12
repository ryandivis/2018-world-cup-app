import { browser, element, by } from 'protractor';
import { openMenu } from './helpers';

describe('News page', () => {

	beforeEach(() => {
		browser.get('');
	});

	it('should open News list and navigate to News item page', () => {
		let expectedNewsTitle = 'WISI CONSEQUAT SIT ZZRIL.';

		// Open News page
		openMenu('News');

		// Check if it's open
		expect(browser.getTitle()).toEqual('News');

		// Get the list of news from the News list page
		let newsItems = element.all(by.css('.ion-page ion-list ion-item'));

		// Check if news list is loaded
		expect(newsItems.count()).toEqual(5);
		expect(newsItems.first().$('h2').getText()).toEqual(expectedNewsTitle);

		// Open News item page
		newsItems.first().click();

		let newsItem = element(by.css('.news-item'));
		expect(newsItem.$('h2').getText()).toBe(expectedNewsTitle);
	});
})