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
import {AuthGuard} from './_guards/index';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'feeds', component: FeedsComponent, canActivate: [AuthGuard]},
    {path: 'leads', component: LeadsComponent, canActivate: [AuthGuard]},
    {path: 'accounts', component: AccountsComponent, canActivate: [AuthGuard]},
    {path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard]},
    {path: 'deals', component: DealsComponent, canActivate: [AuthGuard]},
    {path: 'reports', component: ReportsComponent, canActivate: [AuthGuard]},
    {path: 'activities', component: ActivitiesComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    {path: '**', redirectTo: ''}
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