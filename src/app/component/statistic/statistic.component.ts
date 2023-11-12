import { Component } from '@angular/core';
import {CommonStatisticDto} from "../../dto/CommonStatisticDto";
import {RestService} from "../../service/rest.service";
import {TopTenPlayerDto} from "../../dto/TopTenPlayerDto";
import {ClanDto} from "../../dto/ClanDto";
import {CastleDto} from "../../dto/CastleDto";
import {FortDto} from "../../dto/FortDto";

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent {

  commons?: CommonStatisticDto;
  topTenPlayers?: TopTenPlayerDto[];
  clans?: ClanDto[];
  castles?: CastleDto[];
  forts?: FortDto[];

  constructor(restService: RestService) {
    this.commons = restService.getCommonStatistic()
    this.topTenPlayers = restService.getTopTenPlayers()
    this.clans = restService.getClans()
    this.castles = restService.getCastles()
    this.forts = restService.getForts()
  }

  getDate(siegeDate: number | undefined) {
    return siegeDate !== 0 ? Date.call(siegeDate)  : 'none'
  }
}
