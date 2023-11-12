import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TopBarComponent} from './component/top-bar/top-bar.component';
import {NewsListComponent} from './component/news-list/news-list.component';
import {NewsDetailsComponent} from './component/news-details/news-details.component';
import {LoginComponent} from './component/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {RegistrationComponent} from './component/registration/registration.component';
import {AboutServerComponent} from './component/about-server/about-server.component';
import {StatisticComponent} from './component/statistic/statistic.component';
import {HashLocationStrategy, LocationStrategy, NgOptimizedImage} from "@angular/common";
import {CabinetRestorePasswordComponent} from './component/cabinet-restore-password/cabinet-restore-password.component';
import {CabinetChangePasswordComponent} from './component/cabinet-change-password/cabinet-change-password.component';
import {AccountsListComponent} from './component/cabinet-user/accounts-list/accounts-list.component';
import {
    AccountPasswordChangeComponent
} from './component/cabinet-user/account-password-change/account-password-change.component';
import {AccountCreateComponent} from './component/cabinet-user/account-create/account-create.component';
import {ContactComponent} from './component/cabinet-user/contact/contact.component';
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module, ReCaptchaV3Service} from "ng-recaptcha";
import {environment} from "../environments/environment";
import {UserListComponent} from './component/cabinet-admin/user-list/user-list.component';
import {UsersAccountsListComponent} from './component/cabinet-admin/users-accounts-list/users-accounts-list.component';
import {AdminNewsListComponent} from './component/cabinet-admin/admin-news-list/admin-news-list.component';
import {CreateNewsFormComponent} from './component/cabinet-admin/create-news-form/create-news-form.component';
import {SafePipe} from './pipe/safe.pipe';
import {TopTenStatComponent} from './component/statistic/top-ten-stat/top-ten-stat.component';
import {ClansStatComponent} from './component/statistic/clans-stat/clans-stat.component';
import {CastlesStatComponent} from './component/statistic/castles-stat/castles-stat.component';
import {FortsStatComponent} from './component/statistic/forts-stat/forts-stat.component';
import {CommonStatComponent} from './component/statistic/common-stat/common-stat.component';
import {MatListModule} from "@angular/material/list";
import {VideoComponent} from './component/video/video.component';
import {UserComponent} from './component/cabinet-user/user.component';
import {AdminComponent} from './component/cabinet-admin/admin.component';
import {loginGuard} from "./guard/login.guard";
import {AuthGuard} from "./guard/AuthGuard";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    NewsListComponent,
    NewsDetailsComponent,
    LoginComponent,
    RegistrationComponent,
    AboutServerComponent,
    StatisticComponent,
    CabinetRestorePasswordComponent,
    CabinetChangePasswordComponent,
    AccountsListComponent,
    AccountPasswordChangeComponent,
    AccountCreateComponent,
    ContactComponent,
    UserListComponent,
    UsersAccountsListComponent,
    AdminNewsListComponent,
    CreateNewsFormComponent,
    SafePipe,
    TopTenStatComponent,
    ClansStatComponent,
    CastlesStatComponent,
    FortsStatComponent,
    CommonStatComponent,
    VideoComponent,
    UserComponent,
    AdminComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        RecaptchaV3Module,
        RouterModule.forRoot([
            {path: '', component: NewsListComponent},
            {path: 'news/:newsId', component: NewsDetailsComponent},
            {path: 'login', component: LoginComponent},
            {path: 'registration', component: RegistrationComponent},
            {path: 'about', component: AboutServerComponent},
            {path: 'restore-password', component: CabinetRestorePasswordComponent},
            {
                path: 'cabinet-user/:access', component: UserComponent, canActivate: [loginGuard, AuthGuard], children: [
                    {path: '', redirectTo: 'accounts-list', pathMatch: 'full'},
                    {path: 'account-create', component: AccountCreateComponent},
                    {
                        path: 'accounts-list', component: AccountsListComponent, children: [
                            {path: 'account-password-change/:accId', component: AccountPasswordChangeComponent},
                        ]
                    },
                    {path: 'cabinet-change-password', component: CabinetChangePasswordComponent},
                    {path: 'contact', component: ContactComponent}
                ]
            },
            {
                path: 'cabinet-admin/:access', component: AdminComponent, canActivate: [loginGuard, AuthGuard], children: [
                    {path: '', redirectTo: 'users-accounts-list', pathMatch: 'full'},
                    {path: 'cabinet-change-password', component: CabinetChangePasswordComponent},
                    {path: 'user-list', component: UserListComponent},
                    {path: 'users-accounts-list', component: UsersAccountsListComponent},
                    {path: 'admin-news-list', component: AdminNewsListComponent},
                    {path: 'create-news-form', component: CreateNewsFormComponent}
                ]
            },
            {
                path: 'statistic', component: StatisticComponent, children: [
                    {path: '', redirectTo: 'common', pathMatch: 'full'},
                    {path: 'common', component: CommonStatComponent},
                    {path: 'top-ten', component: TopTenStatComponent},
                    {path: 'clans', component: ClansStatComponent},
                    {path: 'castles', component: CastlesStatComponent},
                    {path: 'forts', component: FortsStatComponent}
                ]
            },
            {path: '**', redirectTo: '', pathMatch: 'full'},
        ]),
        FormsModule,
        NgOptimizedImage,
        MatListModule
    ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    ReCaptchaV3Service,
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey,
    }, AuthGuard
  ],
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/