import { NgModule } from '@angular/core';
import { IonicModule, Platform } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { I18nPage } from './i18n.page';
import { TranslateService } from 'ng2-translate';
import { defaultLanguage, availableLanguages, sysOptions } from './i18n.constants';
import { Globalization } from '@ionic-native/globalization';

@NgModule({
	imports: [IonicModule, TranslateModule],
	declarations: [I18nPage],
	entryComponents: [I18nPage],
	providers: [Globalization]
})
export class I18nModule {
	constructor(platform: Platform, translate: TranslateService, globalization: Globalization) {
		platform.ready().then(() => {
				// this language will be used as a fallback when a translation isn't found in the current language
				translate.setDefaultLang(defaultLanguage);

				if ((<any>window).cordova) {
					globalization.getPreferredLanguage().then(result => {
						let language = this.getSuitableLanguage(result.value);
						translate.use(language);
						sysOptions.systemLanguage = language;
					});
				} else {
					let browserLanguage = translate.getBrowserLang() || defaultLanguage;
					let language = this.getSuitableLanguage(browserLanguage);
					translate.use(language);
					sysOptions.systemLanguage = language;
				}
			}
		);
	}


	getSuitableLanguage(language) {
		language = language.substring(0, 2).toLowerCase();
		return availableLanguages.some(x => x.code == language) ? language : defaultLanguage;
	}
}