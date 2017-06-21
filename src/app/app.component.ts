import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Http, URLSearchParams} from '@angular/http';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    constructor(translate: TranslateService, private _http: Http) {
        translate.setDefaultLang('en');
        translate.use('ar');
    }

    startHttpRequest() {
        this._http.get('/app/heroes/?name=^j');
    }
}


