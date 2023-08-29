import {Component} from '@angular/core';
import {RestService} from "../service/rest.service";

@Component({
    selector: 'app-about-server',
    templateUrl: './about-server.component.html',
    styleUrls: ['./about-server.component.css']
})
export class AboutServerComponent {

    serverProperties!: Map<string, string>;

    constructor(private restService: RestService) {
        this.restService.getProperties()
            .subscribe(value => this.serverProperties = value);
    }
}
