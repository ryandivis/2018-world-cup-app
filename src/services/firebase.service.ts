import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as moment from 'moment';
import * as _ from 'lodash';

export class Match {
  public id: string;
  public date: string;
  public teams: string;
}

export class Group {
  public id: string;
  public name: string;
  public teams: string[];
}

export class Selection {
  public id: string;
  public groups: {};
  public userId: string;
}

export class MatchSelection {
  public id: string;
  public date: string;
  public matches: {};
  public userId: string;
}

export class User {
  public id: string;
  public name: string;
  public points: number;
}

@Injectable()
export class FirebaseService {
  private matchesCollection: AngularFirestoreCollection<Match>;
  matches: any;

  private groupsCollection: AngularFirestoreCollection<Group>;
  groups: Observable<Group[]>;

  private selectionCollection: AngularFirestoreCollection<Selection>;
  userSelection: Observable<Selection[]>;

  private matchSelctionCollection: AngularFirestoreCollection<MatchSelection>;
  userMatchSelection: Observable<MatchSelection[]>;

  private userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(private afs: AngularFirestore, private auth: AuthService) {
    this.matchesCollection = afs.collection<Match>('matches', ref => ref.orderBy('date'));
    this.matches = this.matchesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Match;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    this.groupsCollection = afs.collection<Group>('groups', ref => ref.orderBy('name'));
    this.groups = this.groupsCollection.valueChanges();

    this.userCollection = afs.collection<User>('users', ref => ref.orderBy('name'));
    this.users = this.userCollection.valueChanges();
  }

  public getMatches() {
    return this.matches;
  }

  public getGroups() {
    return this.groups;
  }

  public getUserSelection(id) {
    this.selectionCollection = this.afs.collection<Selection>('selections', ref => ref.where('userId', '==', id).orderBy('date', 'desc'));
    this.userSelection = this.selectionCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Selection;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );;
    return this.userSelection;
  }

  public saveUserGroupSelection(groups, id?) {
    if (!_.isNil(id)) {
      this.afs.collection('selections').doc(id).set({
        userId: this.auth.getUserId(),
        date: moment().toISOString(),
        groups: groups
      });
    } else {
      this.afs.collection('selections').add({
        userId: this.auth.getUserId(),
        date: moment().toISOString(),
        groups: groups
      });
    }
  }

  public getUserMatchSelection(id) {
    this.matchSelctionCollection = this.afs.collection<MatchSelection>('matchSelections', ref => ref.where('userId', '==', id).orderBy('date', 'desc'));
    this.userMatchSelection = this.matchSelctionCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as MatchSelection;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.userMatchSelection;
  }

  public saveUserMatchSelection(matches, id?) {
    console.log(matches);
    if (!_.isNil(id)) {
      this.afs.collection('matchSelections').doc(id).set({
        userId: this.auth.getUserId(),
        date: moment().toISOString(),
        matches: matches
      });
    } else {
      this.afs.collection('matchSelections').add({
        userId: this.auth.getUserId(),
        date: moment().toISOString(),
        matches: matches
      });
    }
  }

  public getUsers() {
    return this.users;
  }
}
