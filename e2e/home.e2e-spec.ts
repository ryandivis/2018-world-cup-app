import { browser } from 'protractor';

describe('Home page', () => {

	beforeEach(() => {
		browser.get('');
	});

	it('should have a title', () => {
		expect(browser.getTitle()).toEqual('Home');
	});
})