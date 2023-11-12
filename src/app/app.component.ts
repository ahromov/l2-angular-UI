import {Component} from '@angular/core';
import {videosIds} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ifRameUrl: string  = '';

  constructor(
  ) {
    // @ts-ignore
    this.ifRameUrl = this.getVideosIds();
  }

  getVideosIds() {
    let number: number | undefined;
    number = Math.floor(Math.random() * videosIds.length);
    return videosIds.at(number);
  }

}

