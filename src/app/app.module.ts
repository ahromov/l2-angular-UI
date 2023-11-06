import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TopBarComponent} from './component/top-bar/top-bar.component';
import {NewsListComponent} from './component/news-details/news-list/news-list.component';
import {NewsDetailsComponent} from './component/news-details/news-details.component';
import {LoginComponent} from './component/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {RegistrationComponent} from './component/registration/registration.component';
import {AboutServerComponent} from './component/about-server/about-server.component';
import {CabinetComponent} from './component/cabinet/cabinet.component';
import {StatisticComponent} from './component/statistic/statistic.component';
import {commonGuardGuard, loginGuard} from "./common-guard.guard";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {CabinetRestorePasswordComponent} from './component/cabinet-restore-password/cabinet-restore-password.component';
import {
  CabinetChangePasswordComponent
} from './component/cabinet/cabinet-change-password/cabinet-change-password.component';
import {AccountsListComponent} from './component/cabinet/accounts-list/accounts-list.component';
import {
  AccountPasswordChangeComponent
} from './component/cabinet/account-password-change/account-password-change.component';
import {AccountCreateComponent} from './component/cabinet/account-create/account-create.component';
import {ContactComponent} from './component/cabinet/contact/contact.component';
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module, ReCaptchaV3Service} from "ng-recaptcha";
import {environment} from "../environments/environment";

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
    CabinetComponent,
    StatisticComponent,
    CabinetRestorePasswordComponent,
    CabinetChangePasswordComponent,
    AccountsListComponent,
    AccountPasswordChangeComponent,
    AccountCreateComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecaptchaV3Module,
    RouterModule.forRoot([
      {path: '', component: NewsListComponent},
      {path: 'news/:newsId', component: NewsDetailsComponent},
      {path: 'login', component: LoginComponent, canActivate: [loginGuard]},
      {path: 'registration', component: RegistrationComponent},
      {path: 'about', component: AboutServerComponent},
      {path: 'cabinet', component: CabinetComponent, canActivate: [commonGuardGuard]},
      {path: 'statistic', component: StatisticComponent},
      {path: 'restore-password', component: CabinetRestorePasswordComponent},
      {path: '**', redirectTo: '', pathMatch: 'full'},
    ]),
    FormsModule
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
    }
  ],
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/