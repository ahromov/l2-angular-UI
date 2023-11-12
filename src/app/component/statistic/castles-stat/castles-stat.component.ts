import { Component } from '@angular/core';
import {CastleDto} from "../../../dto/CastleDto";
import {RestService} from "../../../service/rest.service";

@Component({
  selector: 'app-castles',
  templateUrl: './castles-stat.component.html',
  styleUrls: ['./castles-stat.component.css']
})
export class CastlesStatComponent {

    castles?: CastleDto[];

    constructor(restService: RestService) {
        this.castles = restService.getCastles()
    }

    getDate(siegeDate: number | undefined) {
        // @ts-ignore
        return siegeDate !== 0 ? new Date(siegeDate)  : 'None'
    }
}
