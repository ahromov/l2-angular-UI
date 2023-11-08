import {Component, EventEmitter, Output} from '@angular/core';
import {AccountDto} from "../../../dto/AccountDto";
import {RestService} from "../../../service/rest.service";
import {UserDto} from "../../../dto/UserDto";

@Component({
  selector: 'app-users-accounts-list',
  templateUrl: './users-accounts-list.component.html',
  styleUrls: ['./users-accounts-list.component.css']
})
export class UsersAccountsListComponent {

  @Output() infoMessage = new EventEmitter<string>();
  @Output() errorMessage = new EventEmitter<string>();

  allAccounts?: AccountDto[];

  constructor(
      private restService: RestService
  ) {
    this.getAllAccounts();
  }

  deleteAccount(accountDto: AccountDto) {
    let token = localStorage.getItem('token');
    this.restService.deleteAccount(accountDto, token).subscribe({
      next: value => {
        this.infoMessage.emit("User with all accounts deleted.");
        this.getAllAccounts();
      },
      error: err => {
        this.errorMessage.emit("Something wrong(... " + err.status)
      }
    });
  }

  private getAllAccounts() {
    let token = localStorage.getItem('token');
    this.restService.getAllUserAccounts(token).subscribe({
      next: value => {
        this.allAccounts = value;
      },
      error: err => {
        this.errorMessage.emit("Somthing wrong(... " + err.status)
      }
    });
  }
}
