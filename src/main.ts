import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import './rxjs-imports';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

/*
export interface X {
  (str: string): string;
}
let x: X = function(str: string) {return str};
alert(x("Hallo Welt!"));
*/