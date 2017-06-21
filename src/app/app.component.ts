import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Http, URLSearchParams} from '@angular/http';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    constructor(translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('ar');
    }
}


