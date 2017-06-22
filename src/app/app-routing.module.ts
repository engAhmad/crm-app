import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {FeedsComponent} from "./feeds/feeds.component";
import {LeadsComponent} from "./leads/leads.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {DealsComponent} from "./deals/deals.component";
import {LoginComponent} from "./auth/login/login.component";
import {ForgotPasswordComponent} from "./auth/forgot-password/forgot-password.component";
import {ReportsComponent} from "./reports/reports.component";
import {ActivitiesComponent} from "./activities/activities.component";
import {AuthGuard} from "./_guards/index";

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent, data: {breadcrumb: 'Login'}},
    {path: 'forgot_password', component: ForgotPasswordComponent, data: {breadcrumb: 'Forgot password'}},
    {path: 'home', component: HomeComponent, data: {breadcrumb: 'HOME'}, canActivate: [AuthGuard]},
    {path: 'feeds', component: FeedsComponent, data: {breadcrumb: 'FEEDS'}, canActivate: [AuthGuard]},
    {path: 'leads', component: LeadsComponent, data: {breadcrumb: 'LEADS'}, canActivate: [AuthGuard]},
    {path: 'accounts', component: AccountsComponent, data: {breadcrumb: 'ACCOUNTS'}, canActivate: [AuthGuard]},
    {path: 'contacts', component: ContactsComponent, data: {breadcrumb: 'CONTACTS'}, canActivate: [AuthGuard]},
    {path: 'deals', component: DealsComponent, data: {breadcrumb: 'DEALS'}, canActivate: [AuthGuard]},
    {path: 'reports', component: ReportsComponent, data: {breadcrumb: 'REPORTS'}, canActivate: [AuthGuard]},
    {path: 'activities', component: ActivitiesComponent, data: {breadcrumb: 'ACTIVITIES'}, canActivate: [AuthGuard]}
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}