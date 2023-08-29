import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestService } from '../service/rest.service';
import {NewsDto} from "../dto/NewsDto";

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit{

  news: NewsDto | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: RestService
  ) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('newsId'));
  
    // Find the product that correspond with the id provided in route.
    // @ts-ignore
    this.news = this.cartService.getNewsById(productIdFromRoute)
        .subscribe(value => this.news = value);
  }

}
