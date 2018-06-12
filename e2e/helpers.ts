import { by, element } from 'protractor';

export const openMenu = (title: string) => {
	return element(by.cssContainingText('ion-menu ion-item', title)).click();
};