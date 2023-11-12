import {Component, EventEmitter, Output} from '@angular/core';
import {AccountDto} from "../../../dto/AccountDto";
import {FormBuilder, FormGroup} from "@angular/forms";
import {RestService} from "../../../service/rest.service";

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent {

    @Output() infoMessage = new EventEmitter<string>();
    @Output() errorMessage = new EventEmitter<string>();

    checkoutForm: FormGroup = this.formBuilder.group({
        login: '',
        password1: '',
        password2: ''
    });

    constructor(
        private formBuilder: FormBuilder,
        private restService: RestService
    ) {
    }

    public createAccount() {
        let user = this.buildAccount();
        let token = localStorage.getItem('token');
        this.restService.createAccount(user, token)
            .subscribe({
                next: value => {
                    this.infoMessage.emit(`Congratulation! Game account ${user.login} created`);
                },
                error: err => {
                    if (err.status == 409){
                        this.errorMessage.emit(`Account with login ${user.login} already exists.`);
                    } else {
                        this.errorMessage.emit(`Passwords not match`);
                    }
                }
            });
    }

    private buildAccount() {
        let accountDto = new AccountDto();
        accountDto.login = this.checkoutForm?.controls['login'].value;
        accountDto.accountPassword.newPassword = this.checkoutForm?.controls['password1'].value;
        accountDto.accountPassword.newRepeatedPassword = this.checkoutForm?.controls['password2'].value;
        return accountDto;
    }
}
