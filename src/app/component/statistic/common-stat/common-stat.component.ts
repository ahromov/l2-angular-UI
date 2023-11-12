import { Component } from '@angular/core';
import {CommonStatisticDto} from "../../../dto/CommonStatisticDto";
import {RestService} from "../../../service/rest.service";

@Component({
  selector: 'app-common-stat',
  templateUrl: './common-stat.component.html',
  styleUrls: ['./common-stat.component.css']
})
export class CommonStatComponent {

    commons?: CommonStatisticDto;

    constructor(restService: RestService) {
        this.commons = restService.getCommonStatistic()
    }

}
