import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RestService} from "../../service/rest.service";


@Component({
  selector: 'app-cabinet-restore-password',
  templateUrl: './cabinet-restore-password.component.html',
  styleUrls: ['./cabinet-restore-password.component.css']
})
export class CabinetRestorePasswordComponent {

    checkoutForm: FormGroup = this.formBuilder.group({email: ''});
    infoMessage?: string;
    errorMessage?: string;

    constructor(
        private restService: RestService,
        private formBuilder: FormBuilder
    ) {
    }

    onSubmit() {
        let email = this.checkoutForm.controls['email'].value;
        this.restService.restorePassword(email).subscribe(
            {
                next: value => {
                    this.clearMessage()
                    this.infoMessage = "Hello " + value.login + "!. Your new password sent on your email. Please check it."
                },
                error: err => {
                    this.clearMessage()
                    this.errorMessage = "Something wrong( ..." + err.status + ". Please, verify your email and try again"
                }
            }
        );
    }

    clearMessage() {
        this.infoMessage = undefined;
        this.errorMessage = undefined;
    }

}
