import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseItem } from './models/firebase-item.model';

@Injectable()
export class FirebaseCrudService {
	constructor(private db: AngularFireDatabase) {
	}

	public getItems(): AngularFireList<FirebaseItem> {
		return this.db.list('items');
	}
}