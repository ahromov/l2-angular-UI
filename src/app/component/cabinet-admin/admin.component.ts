import { Component } from '@angular/core';
import {RestService} from "../../service/rest.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

    infoMessage?: string;
    errorMessage?: string;

    loggedIn: boolean = false;
    greeting: string | undefined;

    isVisible: boolean = false;
    private TOKEN: string = 'token';

    constructor(
        private restService: RestService,
        private router: Router
    ) {
        let token = localStorage.getItem(this.TOKEN);
        if (token){
            this.loggedIn = true;
        }
        this.getGreeting();
    }

    getGreeting() {
        let token = localStorage.getItem(this.TOKEN);
        if (token !== null) this.restService.getGreeting(token).subscribe(value => {
            this.greeting = 'Hello ' + value.login + '!';
        });
    }

    onLogout(): void {
        this.loggedIn = false;
        localStorage.clear()
        this.router.navigate(['']);
    }

}
