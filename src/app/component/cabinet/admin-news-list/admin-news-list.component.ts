import {Component, EventEmitter, Output} from '@angular/core';
import {NewsDto} from "../../../dto/NewsDto";
import {RestService} from "../../../service/rest.service";

@Component({
  selector: 'app-admin-news-list',
  templateUrl: './admin-news-list.component.html',
  styleUrls: ['./admin-news-list.component.css']
})
export class AdminNewsListComponent {

  @Output() infoMessage = new EventEmitter<string>();
  @Output() errorMessage = new EventEmitter<string>();

  newsList?: NewsDto[];

  constructor(
      private restService: RestService
  ) {
    this.getNewsList();
  }

  private getNewsList() {
    let token = localStorage.getItem('token');
    this.restService.getNewsList(token).subscribe({
      next: value => {
        this.newsList = value;
      },
      error: err => {
        this.errorMessage.emit("Something wrong(... " + err.status)
      }
    });
  }

  deleteNews(news: NewsDto) {
    let token = localStorage.getItem('token');
    this.restService.getDeleteNews(news, token).subscribe({
      next: value => {
        this.infoMessage.emit("User with all accounts deleted.");
        this.getNewsList();
      },
      error: err => {
        this.errorMessage.emit("Something wrong(... " + err.status)
      }
    });
  }
}
