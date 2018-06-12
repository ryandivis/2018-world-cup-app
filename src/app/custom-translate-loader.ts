import { TranslateStaticLoader } from 'ng2-translate';
import { Http } from '@angular/http';

export const createTranslateLoader = (http: Http) => {
	return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}