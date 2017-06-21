import {Component, OnInit} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    public appTitle: string;

    constructor(public translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('ar');
    }

    public ngOnInit() {
        this.translate.get('APP_TITLE').subscribe((title: string) => {
            this.appTitle = title;
        });
    }
}


