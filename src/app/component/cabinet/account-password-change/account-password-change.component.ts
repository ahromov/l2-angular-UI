import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AccountDto} from "../../../dto/AccountDto";
import {RestService} from "../../../service/rest.service";

@Component({
  selector: 'app-account-password-change',
  templateUrl: './account-password-change.component.html',
  styleUrls: ['./account-password-change.component.css']
})
export class AccountPasswordChangeComponent {

  @Input() accLogin?: string;
  @Output() infoMessage = new EventEmitter<string>();
  @Output() errorMessage = new EventEmitter<string>();

  checkoutForm: FormGroup  = this.formBuilder.group({
    login: '',
    password1: '',
    password2: ''
  });

  constructor(
      private formBuilder: FormBuilder,
      private restService: RestService,
  ) {
  }

  public ngOnInit(){
    this.checkoutForm.controls['login'].setValue(this.accLogin);
  }

  changePassword() {
    let accountDto = this.buildAccount();
    let token = localStorage.getItem('token');
    this.restService.changeAccountPassword(accountDto, token)
        .subscribe({
          next: value => {
            this.infoMessage.emit(`Congratulation! Account ${value.login} password changed!`);
          },
          error: err => {
            this.errorMessage.emit(`Passwords not match. Check its, and try again.`);
          }
        });
  }

  private buildAccount() {
    let accountDto = new AccountDto();
    accountDto.login = this.checkoutForm.controls['login'].value;
    accountDto.accountPassword.newPassword = this.checkoutForm.controls['password1'].value;
    accountDto.accountPassword.newRepeatedPassword = this.checkoutForm.controls['password2'].value;
    return accountDto;
  }

}
