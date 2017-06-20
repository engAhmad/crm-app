import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
// translating
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
// components
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {FeedsComponent} from './feeds/feeds.component';
import {LeadsComponent} from './leads/leads.component';
import {AccountsComponent} from './accounts/accounts.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AuthComponent} from './auth/auth.component';
// template
import {HeaderComponent} from './layout/header/header.component';
import {TopbarComponent} from './layout/topbar/topbar.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {FooterComponent} from './layout/footer/footer.component';
import {BreadcrumbsComponent} from './layout/breadcrumbs/breadcrumbs.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        FeedsComponent,
        LeadsComponent,
        AccountsComponent,
        ContactsComponent,
        AuthComponent,
        TopbarComponent,
        NavbarComponent,
        FooterComponent,
        BreadcrumbsComponent
    ],
    imports: [
        BrowserModule, AppRoutingModule, HttpModule, TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
