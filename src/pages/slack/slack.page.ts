import { Component } from '@angular/core';
import { SlackService } from './slack.service';

@Component({
	templateUrl: 'slack.html'
})
export class SlackPage {
	message: string;
	sending: boolean;

	private service: SlackService;

	constructor(service: SlackService) {
		this.service = service;
	}

	post() {
		this.sending = true;
		this.service.post(this.message)
			.subscribe(x => {
				this.message = '';
				this.sending = false;
			});
	}
}
