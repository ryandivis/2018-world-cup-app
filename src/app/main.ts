import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import 'chart.js/src/chart';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
