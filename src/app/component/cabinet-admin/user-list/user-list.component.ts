import {Component, EventEmitter, Output} from '@angular/core';
import {RestService} from "../../../service/rest.service";
import {UserDto} from "../../../dto/UserDto";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  @Output() infoMessage = new EventEmitter<string>();
  @Output() errorMessage = new EventEmitter<string>();

  allUsers?: UserDto[];

  constructor(
      private restService: RestService
  ) {
    this.getAllUsers();
  }

  deleteUser(userDto: UserDto) {
    let token = localStorage.getItem('token');
    this.restService.getDeleteUser(userDto, token).subscribe({
      next: value => {
        this.infoMessage.emit("User with all accounts deleted.");
        this.getAllUsers();
      },
      error: err => {
        this.errorMessage.emit("Something wrong(... " + err.status)
      }
    });
  }

  private getAllUsers() {
    let token = localStorage.getItem('token');
    this.restService.getAllUsers(token).subscribe({
      next: value => {
        this.allUsers = value;
      },
      error: err => {
        this.errorMessage.emit("Something wrong(... " + err.status)
      }
    });
  }
}
