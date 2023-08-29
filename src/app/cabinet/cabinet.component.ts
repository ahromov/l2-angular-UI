import {Component} from '@angular/core';
import {RestService} from "../service/rest.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {AccountDto} from "../dto/AccountDto";

const TOKEN = "token";

@Component({
    selector: 'app-cabinet',
    templateUrl: './cabinet.component.html',
    styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent {

    logedIn: boolean = false;
    greeting: string | undefined;
    token: string | undefined
    checkoutForm: any = this.formBuilder.group({
        login: '',
        password1: '',
        password2: ''
    });
    isShowForm: boolean = false;
    buttonTitle: string | undefined;
    formType: string | undefined;
    isShowAccountsList: boolean = false;
    allAccounts: AccountDto[] | undefined;

    constructor(
        private restService: RestService,
        private router: Router,
        private formBuilder: FormBuilder
    ) {
        this.logedIn = true;
        let item = localStorage.getItem(TOKEN);
        if (item !== null) {
            this.logedIn = true;
            this.token = item;
        }
        this.getGreeting();
    }

    getGreeting() {
        if (this.token !== null) this.restService.getGreeting(this.token).subscribe(value => {
            this.greeting = value.message
            this.saveToken();
            console.log(this.greeting)
        });
    }

    private saveToken() {
        if (typeof this.token === "string") {
            localStorage.setItem(TOKEN, this.token)
        }
    }

    onLogout(): void {
        // @ts-ignore
        localStorage.clear()
        this.router.navigate(['']);
        this.logedIn = false;
    }


    showForm(type: string) {
        if (type === 'createAccount') this.buttonTitle = 'Create game account'
        if (type === 'changePassword') this.buttonTitle = 'Change password'
        this.formType = type;
        this.isShowAccountsList = false;
        this.isShowForm = !this.isShowForm;
    }

    onSubmit() {
        switch (this.formType) {
            case 'createAccount':
                this.createAccount();
                return;
            case 'changePassword':
                this.changePassword();
                return;
        }
    }

    private createAccount() {
        let user = this.buildUser();
        this.restService.createAccount(user, this.token)
            .subscribe(value => {
                this.greeting = `Congratulation! Game account ${value.login} created`;
                this.isShowForm = false;
            });
    }

    private changePassword() {
        let accountDto = this.buildUser();
        this.restService.changePassword(accountDto, this.token)
            .subscribe(value => {
                this.greeting = `Congratulation! Account ${value.login} password changed!`;
                this.isShowForm = false;
            });
    }

    private buildUser() {
        let login = this.checkoutForm.controls['login'].value;
        let password1 = this.checkoutForm.controls['password1'].value;
        let password2 = this.checkoutForm.controls['password2'].value;
        return new AccountDto(login, '', '', password1, password2);
    }

    showAllAccounts() {
        this.allAccounts = this.getAllAccounts();
        this.isShowForm = false;
        this.isShowAccountsList = true;
    }

    private getAllAccounts() {
        let list: AccountDto[] = []
        this.restService.getAllAccounts(this.token)
            .subscribe(value => {
                value.forEach(v => {
                    list.push(v)
                })
            })
        return list;
    }

    showChangePasswordForm(login: string) {
        this.showForm('changePassword');
        this.checkoutForm.controls['login'].value = login;
    }

}
