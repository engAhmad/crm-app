import {BrowserModule, Title} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule, Http} from "@angular/http";
import {NgLoadingBarModule} from "ng-loading-bar";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "./app-routing.module";
import {FeedsComponent} from "./feeds/feeds.component";
import {LeadsComponent} from "./leads/leads.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {DealsComponent} from "./deals/deals.component";
import {ReportsComponent} from "./reports/reports.component";
import {ActivitiesComponent} from "./activities/activities.component";
import {LoginComponent} from "./auth/login/login.component";
import {ForgotPasswordComponent} from "./auth/forgot-password/forgot-password.component";
import {HeaderComponent} from "./layout/header/header.component";
import {TopbarComponent} from "./layout/topbar/topbar.component";
import {NavbarComponent} from "./layout/navbar/navbar.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {BreadcrumbsComponent} from "./layout/breadcrumbs/breadcrumbs.component";
import {AuthGuard} from "./_guards/index";
import {AlertComponent} from "./_directives/index";
import {AlertService, AuthenticationService, UserService} from "./_services/index";
import {AppState} from "./app.service";
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        LoginComponent,
        ForgotPasswordComponent,
        AppComponent,
        HeaderComponent,
        HomeComponent,
        FeedsComponent,
        LeadsComponent,
        AccountsComponent,
        ContactsComponent,
        DealsComponent,
        TopbarComponent,
        NavbarComponent,
        FooterComponent,
        BreadcrumbsComponent,
        ReportsComponent,
        ActivitiesComponent,
        AlertComponent,

    ],
    imports: [
        BrowserModule, FormsModule, AppRoutingModule, HttpModule, TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        NgLoadingBarModule.forRoot(),
    ],
    providers: [
        Title,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        AppState
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
