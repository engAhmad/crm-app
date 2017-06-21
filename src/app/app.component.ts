import {Component} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {

    constructor(private translate: TranslateService, title: Title) {
        translate.setDefaultLang('en');
        translate.use('ar');
        this.setAppTitle(title);
    }

    public  setAppTitle(title: Title) {
        return this.translate.get('APP_TITLE').subscribe((res: string) => {
            title.setTitle(res);
        });
    }
}


