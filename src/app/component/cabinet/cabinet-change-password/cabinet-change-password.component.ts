import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RestService} from "../../../service/rest.service";
import {UserPasswordDto} from "../../../dto/UserDto";

@Component({
  selector: 'app-cabinet-change-password',
  templateUrl: './cabinet-change-password.component.html',
  styleUrls: ['./cabinet-change-password.component.css']
})
export class CabinetChangePasswordComponent {

    @Output() infoMessage = new EventEmitter<string>();
    @Output() errorMessage = new EventEmitter<string>();

    checkoutForm: FormGroup = this.formBuilder.group({
        password1: '',
        password2: ''
    });

    constructor(
        private formBuilder: FormBuilder,
        private restService: RestService
    ) {
    }

    onSubmit() {
        let token = localStorage.getItem("token");
        let password1 = this.checkoutForm.controls['password1'].value;
        let password2 = this.checkoutForm.controls['password2'].value;
        let upd = new UserPasswordDto(password1, password2)
        this.restService.changeCabinetPassword(token, upd).subscribe({
            next: value => {
                this.infoMessage.emit( "Password successfully changed! Check your email.");
            },
            error: err => {
                this.errorMessage.emit("Something wrong( ... Check that both password is equal.")
            }
        })
        this.checkoutForm.reset();
    }

}
