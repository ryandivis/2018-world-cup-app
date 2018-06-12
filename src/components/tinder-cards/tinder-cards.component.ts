import { Component, ViewChild, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { SwingStackComponent, StackConfig, DragEvent } from 'angular2-swing';

@Component({
	selector: 'tinder-cards',
	templateUrl: 'tinder-cards.html'
})
export class TinderCardsComponent implements AfterViewInit {
	@Input() cards: any[];
	@Output() voteUp: EventEmitter<any> = new EventEmitter<any>();
	@ViewChild('myswing1') swingStack: SwingStackComponent;

	stackConfig: StackConfig;

	constructor() {
		this.stackConfig = {
			throwOutConfidence: (offset, element) => {
				return Math.min(Math.abs(offset) / (element.offsetWidth / 2), 1);
			},
			transform: (element, x, y, r) => {
				this.onItemMove(element, x, y, r);
			},
			throwOutDistance: () => {
				return 800;
			}
		};
	}

	ngAfterViewInit() {
		this.swingStack.throwin.subscribe((event: DragEvent) => {
			event.target.style.background = '#ffffff';
		});
	}

	onItemMove(element, x, y, r) {
		var color = '';
		var abs = Math.abs(x);
		let min = (<any>window).Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
		let hexCode = this.decimalToHex(min, 2);

		if (x < 0) {
			color = '#FF' + hexCode + hexCode;
		} else {
			color = '#' + hexCode + 'FF' + hexCode;
		}

		element.style.background = color;
		element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
	}

	onVoteUp(like: boolean) {
		let removedCard = this.cards.pop();
		this.voteUp.emit({
			like: like,
			removedCard: removedCard.email
		});
	}

	decimalToHex(d, padding) {
		var hex = Number(d).toString(16);
		padding = typeof (padding) === 'undefined' || padding === null ? padding = 2 : padding;

		while (hex.length < padding) {
			hex = '0' + hex;
		}

		return hex;
	}
}
