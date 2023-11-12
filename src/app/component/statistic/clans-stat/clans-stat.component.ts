import { Component } from '@angular/core';
import {ClanDto} from "../../../dto/ClanDto";
import {RestService} from "../../../service/rest.service";

@Component({
  selector: 'app-clans-stat',
  templateUrl: './clans-stat.component.html',
  styleUrls: ['./clans-stat.component.css']
})
export class ClansStatComponent {

    clans?: ClanDto[];

    constructor(restService: RestService) {
        this.clans = restService.getClans()
    }

}
