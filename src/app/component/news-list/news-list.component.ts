import {Component, OnInit} from '@angular/core';

import {RestService} from "../../service/rest.service";
import {NewsDto} from "../../dto/NewsDto";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit{

  newses : NewsDto[] | undefined;

  constructor(
      private restService: RestService
  ) {
  }

  ngOnInit() {
    // @ts-ignore
    this.products = this.restService.getAllNewses()
        .subscribe(value => this.newses = value);
  }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/