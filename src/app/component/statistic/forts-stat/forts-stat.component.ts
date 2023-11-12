import { Component } from '@angular/core';
import {FortDto} from "../../../dto/FortDto";
import {RestService} from "../../../service/rest.service";

@Component({
  selector: 'app-forts-stat',
  templateUrl: './forts-stat.component.html',
  styleUrls: ['./forts-stat.component.css']
})
export class FortsStatComponent {

    forts?: FortDto[];

    constructor(restService: RestService) {
        this.forts = restService.getForts()
    }

    getDate(siegeDate: number | undefined) {
        // @ts-ignore
        return siegeDate !== 0 ? new Date(siegeDate)  : 'None'
    }
}
