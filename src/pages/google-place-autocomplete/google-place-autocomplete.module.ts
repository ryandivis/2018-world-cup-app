import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { GooglePlaceAutocompletePage } from './google-place-autocomplete.page';
import { AutocompleteComponent } from './place-autocomplete.component';

@NgModule({
	declarations: [GooglePlaceAutocompletePage, AutocompleteComponent],
	entryComponents: [GooglePlaceAutocompletePage, AutocompleteComponent],
	imports: [
		IonicModule
	],
	providers: []
})
export class GooglePlaceAutocompleteModule {

}