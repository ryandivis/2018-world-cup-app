import { Injectable } from '@angular/core';
import { PouchDbItem } from './models/pouchdb-item.model';
import PouchDB from 'pouchdb';
import { Config } from '../../config';

@Injectable()
export class PouchDbCrudService {
	private data: PouchDbItem[];
	private db;

	constructor() {
		this.db = new PouchDB(Config.couchdb.local);


		let options = {
			live: true,
			retry: true,
			continuous: true,
			auth: {
				username: Config.couchdb.key,
				password: Config.couchdb.password
			}
		};

		this.db.sync(Config.couchdb.remote, options);
	}

	getItems(): Promise<PouchDbItem[]> {
		if (this.data) {
			return Promise.resolve(this.data);
		}

		return new Promise(resolve => {
			this.db.allDocs({
				include_docs: true
			}).then((result) => {
				this.data = result.rows.map(row => row.doc);
				resolve(this.data);

				this.db
					.changes({ live: true, since: 'now', include_docs: true })
					.on('change', (change) => this.handleChange(change));

			}).catch((error) => {
				console.log(error);
			});
		});
	}

	addItem(item: PouchDbItem) {
		this.db.post(item);
	}

	updateItem(item) {
		this.db.put(item)
			.catch((err) => console.log(err));
	}

	deleteItem(item) {
		this.db.remove(item)
			.catch((err) => console.log(err));
	}

	private handleChange(change) {
		let changedDoc = null;
		let changedIndex = null;

		this.data.forEach((doc, index) => {
			if (doc._id === change.id) {
				changedDoc = doc;
				changedIndex = index;
			}
		});

		if (change.deleted) {
			this.data.splice(changedIndex, 1);
		}
		else {
			if (changedDoc) {
				this.data[changedIndex] = change.doc;
			}
			else {
				this.data.push(change.doc);
			}
		}
	}
}