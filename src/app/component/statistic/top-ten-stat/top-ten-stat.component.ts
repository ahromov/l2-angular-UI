import {Component} from '@angular/core';
import {TopTenPlayerDto} from "../../../dto/TopTenPlayerDto";
import {RestService} from "../../../service/rest.service";

@Component({
  selector: 'app-top-ten-stat',
  templateUrl: './top-ten-stat.component.html',
  styleUrls: ['./top-ten-stat.component.css']
})
export class TopTenStatComponent {

    topTenPlayers?: TopTenPlayerDto[];

    constructor(
        restService: RestService
    ) {
        this.topTenPlayers = restService.getTopTenPlayers()
    }

}
