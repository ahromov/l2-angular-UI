import { Component } from '@angular/core';
import {videosIds} from "../../../environments/environment";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {

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
