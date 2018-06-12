import { Component, ElementRef, Input, OnChanges, Renderer, SimpleChange, SimpleChanges } from '@angular/core';
import { Config, Ion } from 'ionic-angular';

@Component({
	selector: 'typcn',
	template: ''
})
export class TypcnComponent extends Ion implements OnChanges {
	@Input() name: string;
	@Input() size: string;

	@Input('fixed-width')
	set fixedWidth(fixedWidth: string) {
		this.setElementClass('typcn-fw', this.isTrueProperty(fixedWidth));
	}

	constructor(config: Config, elementRef: ElementRef, renderer: Renderer) {
		super(config, elementRef, renderer, 'typcn');
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.name) {
			this.unsetPrevAndSetCurrentClass(changes.name);
		}
		if (changes.size) {
			this.unsetPrevAndSetCurrentClass(changes.size);
		}
	}

	isTrueProperty(val: any): boolean {
		if (typeof val === 'string') {
			val = val.toLowerCase().trim();
			return (val === 'true' || val === 'on' || val === '');
		}
		return !!val;
	};

	unsetPrevAndSetCurrentClass(change: SimpleChange) {
		this.setElementClass('typcn-' + change.previousValue, false);
		this.setElementClass('typcn-' + change.currentValue, true);
	}
}