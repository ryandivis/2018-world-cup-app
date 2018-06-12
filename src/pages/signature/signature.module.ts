import { NgModule } from '@angular/core';
import { SignaturePadModule } from 'angular2-signaturepad';
import { IonicModule } from 'ionic-angular';
import { CustomComponentsModule } from '../../components/custom-components.module';
import { SignatureConfirmationModal } from './signature-confirmation.modal';
import { SignaturePage } from './signature.page';

@NgModule({
	imports: [IonicModule, CustomComponentsModule, SignaturePadModule],
	declarations: [SignaturePage, SignatureConfirmationModal],
	entryComponents: [SignaturePage, SignatureConfirmationModal]
})
export class SignatureModule {

}