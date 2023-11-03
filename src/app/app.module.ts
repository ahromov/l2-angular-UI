import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { AboutServerComponent } from './about-server/about-server.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { StatisticComponent } from './statistic/statistic.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: NewsListComponent },
      { path: 'news/:newsId', component: NewsDetailsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'about', component: AboutServerComponent },
      { path: 'cabinet', component: CabinetComponent },
      { path: 'statistic', component: StatisticComponent },
    ])
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
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/