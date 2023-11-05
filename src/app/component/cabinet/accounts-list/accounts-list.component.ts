import {Component, EventEmitter, Output} from '@angular/core';
import {AccountDto} from "../../../dto/AccountDto";
import {RestService} from "../../../service/rest.service";

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent {

  @Output() isShowAccountsPasswordChangeForm = new EventEmitter<boolean>();
  @Output() isShowAccountsList = new EventEmitter<boolean>();
  @Output() selectedLogin = new EventEmitter<string>();

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

  showAccountChangePasswordForm(login: string) {
    this.selectedLogin.emit(login);
    this.isShowAccountsList.emit(false);
    this.isShowAccountsPasswordChangeForm.emit(true);
  }
}
