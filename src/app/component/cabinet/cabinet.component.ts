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

    public roles?: string[];

    isShowUserList: boolean = false;
    isShowUsersAccounts: boolean = false;
    isShowNewsList: boolean = false;
    isShowCreateNewsForm: boolean = false;

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
            this.greeting = 'Hello ' + value.login + '!';
            this.roles = value.roles;
        });
    }

    showAccountCreateForm() {
        this.clear();
        this.isShowCreateAccountForm = !this.isShowCreateAccountForm;
    }

    showAllAccounts() {
        this.clear();
        this.isShowAccountsList = !this.isShowAccountsList;
    }

    showPasswordChangeForm() {
        this.clear();
        this.isShowChangePasswordForm = !this.isShowChangePasswordForm;
    }

    showContactForm() {
        this.clear();
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
    isInRole(role: string) {
        return this.roles?.includes(role)
    }

    showAllUsers() {
        this.clear();
        this.isShowUserList = !this.isShowUserList;
    }

    showAllUsersAccounts() {
        this.clear();
        this.isShowUsersAccounts = !this.isShowUsersAccounts;
    }

    showNewsList() {
        this.clear();
        this.isShowNewsList = !this.isShowNewsList;
    }

    showCreateNewsForm() {
        this.clear();
        this.isShowCreateNewsForm = !this.isShowCreateNewsForm;
    }

    private hideForms(){
        this.isShowCreateAccountForm = false;
        this.isShowAccountsList = false;
        this.isShowAccountChangePasswordPasswordForm = false;
        this.isShowChangePasswordForm = false;
        this.isShowContactForm = false;
        this.isShowUserList = false;
        this.isShowUsersAccounts = false;
        this.isShowNewsList = false;
        this.isShowCreateNewsForm = false;
    }

    private clear() {
        this.clearMessages()
        this.hideForms()
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
