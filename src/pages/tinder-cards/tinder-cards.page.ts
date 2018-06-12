import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	templateUrl: 'tinder-cards.html'
})
export class TinderCardsPage implements OnInit {
	cards: Array<any>;

	constructor(private http: Http) {
	}

	ngOnInit(): any {
		this.cards = [];
		this.loadCards(10);
	}

	loadCards(count: number) {
		this.http.get('https://randomuser.me/api/?results=' + count)
			.map(data => data.json().results)
			.subscribe(result => {
				for (let val of result) {
					this.cards.push(val);
				}
			})
	}

	voteUp(event) {
		if (event.like) {
			console.log('You liked: ' + event.removedCard);
		} else {
			console.log('You disliked: ' + event.removedCard);
		}
	}
}
