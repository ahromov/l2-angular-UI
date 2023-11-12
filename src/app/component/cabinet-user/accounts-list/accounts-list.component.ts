import {Component} from '@angular/core';
import {AccountDto} from "../../../dto/AccountDto";
import {RestService} from "../../../service/rest.service";

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent {

  isShowAccountsPasswordChangeForm: boolean = false;

  allAccounts?: AccountDto[];

  constructor(
      private restService: RestService
  ) {
    this.allAccounts = this.getAllAccounts();
  }

  private getAllAccounts() {
    let list: AccountDto[] = []
    let token = localStorage.getItem('token');
    this.restService.getAllAccounts(token)
        .subscribe(value => {
          value.forEach(v => {
            list.push(v)
          })
        })
    return list;
  }

  showAccountChangePasswordForm() {
    this.isShowAccountsPasswordChangeForm = !this.isShowAccountsPasswordChangeForm;
  }
}
