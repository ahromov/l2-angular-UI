import {Component, OnInit} from '@angular/core';
import {RestService} from '../../service/rest.service';
import {StatusDto} from "../../dto/StatusDto";

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

    gameServerStatus: StatusDto | undefined;

    bulbeColor: string = 'red'

    constructor(
        private restService: RestService,
    ) {}

    ngOnInit(): void {
        // @ts-ignore
        this.gameServerStatus = this.restService.getServerStatus()
            .subscribe(value => {
                if (value.status === 'ON') this.bulbeColor = 'green'
                this.gameServerStatus = value
            });
    }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/