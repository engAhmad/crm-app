import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {HomeComponent}   from './home/home.component';
import {FeedsComponent} from './feeds/feeds.component';
import {LeadsComponent} from './leads/leads.component';
import {AccountsComponent} from './accounts/accounts.component';
import {ContactsComponent} from './contacts/contacts.component';
import {DealsComponent} from './deals/deals.component';
import {LoginComponent} from "./auth/login/login.component";
import {ReportsComponent} from './reports/reports.component';
import {ActivitiesComponent} from './activities/activities.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'feeds', component: FeedsComponent},
    {path: 'leads', component: LeadsComponent},
    {path: 'accounts', component: AccountsComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'deals', component: DealsComponent},
    {path: 'reports', component: ReportsComponent},
    {path: 'activities', component: ActivitiesComponent},
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