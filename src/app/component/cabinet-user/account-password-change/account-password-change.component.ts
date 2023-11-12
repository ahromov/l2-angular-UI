import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AccountPasswordDto} from "../../../dto/AccountDto";
import {RestService} from "../../../service/rest.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-account-password-change',
  templateUrl: './account-password-change.component.html',
  styleUrls: ['./account-password-change.component.css']
})
export class AccountPasswordChangeComponent {

  infoMessage = '';
  errorMessage = '';

  checkoutForm: FormGroup  = this.formBuilder.group({
    login: '',
    password1: '',
    password2: ''
  });

  constructor(
      private route: ActivatedRoute,
      private formBuilder: FormBuilder,
      private restService: RestService,
  ) {
  }

  public ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    this.checkoutForm.controls['login'].setValue(routeParams.get('accId'));
  }

  changePassword() {
    let login = this.checkoutForm.controls['login'].value;
    let passwordDto = this.buildAccount();
    let token = localStorage.getItem('token');
    this.restService.changeAccountPassword(login, passwordDto, token)
        .subscribe({
          next: value => {
            this.infoMessage = `Congratulation! Account ${value.login} password changed!`;
          },
          error: err => {
            this.errorMessage = `Passwords not match. Check its, and try again.`;
          }
        });
  }

  private buildAccount() {
    let accountDto = new AccountPasswordDto();
    accountDto.newPassword = this.checkoutForm.controls['password1'].value;
    accountDto.newRepeatedPassword = this.checkoutForm.controls['password2'].value;
    return accountDto;
  }

}
