import {Component} from '@angular/core';
import {RestService} from "../../service/rest.service";
import {Router} from "@angular/router";

const TOKEN = "token";

@Component({
    selector: 'app-cabinet',
    templateUrl: './cabinet.component.html',
    styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent {

    infoMessage?: string;
    errorMessage?: string;

    loggedIn: boolean = false;
    greeting: string | undefined;

    isShowAccountsList: boolean = false;
    isShowChangePasswordForm: boolean = false;
    isShowCreateAccountForm: boolean = false;
    isVisible: boolean = false;
    isShowAccountChangePasswordPasswordForm: boolean = false;
    selectedLogin?: string;
    isShowContactForm: boolean = false;

    constructor(
        private restService: RestService,
        private router: Router
    ) {
        let token = localStorage.getItem(TOKEN);
        if (token){
            this.loggedIn = true;
        }
        this.getGreeting();
    }

    getGreeting() {
        let token = localStorage.getItem(TOKEN);
        if (token !== null) this.restService.getGreeting(token).subscribe(value => {
            this.greeting = 'Hello ' + value.login + '!'
        });
    }

    showAccountCreateForm() {
        this.clearMessages()
        this.hideForms()
        this.isShowCreateAccountForm = !this.isShowCreateAccountForm;
    }

    showAllAccounts() {
        this.clearMessages()
        this.hideForms()
        this.isShowAccountsList = !this.isShowAccountsList;
    }

    showPasswordChangeForm() {
        this.clearMessages()
        this.hideForms()
        this.isShowChangePasswordForm = !this.isShowChangePasswordForm;
    }

    showContactForm() {
        this.clearMessages()
        this.hideForms()
        this.isShowContactForm = !this.isShowContactForm;
    }

    onLogout(): void {
        this.loggedIn = false;
        localStorage.clear()
        this.router.navigate(['']);
    }

    showInfoAlert($event: string) {
        this.clearMessages()
        this.infoMessage = $event;
        this.showAlert()
    }

    showErrorAlert($event: string) {
        this.clearMessages()
        this.errorMessage = $event;
        this.showAlert()
    }

    private hideForms(){
        this.isShowCreateAccountForm = false;
        this.isShowAccountsList = false;
        this.isShowAccountChangePasswordPasswordForm = false;
        this.isShowChangePasswordForm = false;
        this.isShowContactForm = false;
    }

    private clearMessages(){
        this.infoMessage = undefined;
        this.errorMessage = undefined;
    }

    private showAlert() : void {
        if (this.isVisible) {
            return;
        }
        this.isVisible = true;
        setTimeout(()=> this.isVisible = false,2500)
    }

}
