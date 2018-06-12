
// IONIC:

export class ConfigMock {

	public get(): any {
		return '';
	}

	public getBoolean(): boolean {
		return true;
	}

	public getNumber(): number {
		return 1;
	}
}

export class FormMock {
	public register(): any {
		return true;
	}
}

export class NavMock {
	page: any;
	params: any;

	public pop(): any {
		return new Promise(function(resolve: Function): void {
			resolve();
		});
	}

	public push(page: any, params?: any): any {
		this.page = page;
		this.params = params;

		return new Promise(function(resolve: Function): void {
			resolve();
		});
	}

	public getActive(): any {
		return {
			'instance': {
				'model': 'something',
			},
		};
	}

	public setRoot(): any {
		return true;
	}
}

export class PlatformMock {
	public ready(): Promise<{String}> {
		return new Promise((resolve) => {
			resolve();
		});
	}

	public registerBackButtonAction(fn: Function, priority?: number): Function {
		return (() => true);
	}

	public hasFocus(ele: HTMLElement): boolean {
		return true;
	}

	public doc(): HTMLDocument {
		return document;
	}

	public registerListener(ele: any, eventName: string, callback: any): Function {
		return (() => true);
	}

	public win(): Window {
		return window;
	}

	public raf(callback: any): number {
		return 1;
	}
}

export class MenuMock {
	public close(): any {
		return new Promise((resolve: Function) => {
			resolve();
		});
	}
}