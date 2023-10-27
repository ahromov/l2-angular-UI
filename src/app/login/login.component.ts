import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {RestService} from '../service/rest.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    checkoutForm = this.formBuilder.group({
        email: '',
        password: ''
    });

    // token: string | undefined;
    logedIn: boolean = false;
    errorMessage: string | null | undefined;

    constructor(
        private restService: RestService,
        private formBuilder: FormBuilder,
    ) {
        let item = localStorage.getItem('token');
        if (item !== null) this.logedIn = true;
    }

    onLogin(): void {
        this.getToken()
            .subscribe(
                {
                    next: (value) => {
                        localStorage.setItem('token', value.token)
                        this.logedIn = true;
                        this.checkoutForm.reset();
                    },
                    error: err => {
                        this.errorMessage = 'User not exists or incorrect password... '
                    }
                }
         );
    }

    getToken() {
        let email = this.checkoutForm.controls['email'].value;
        let password = this.checkoutForm.controls['password'].value;
        return this.restService.getToken(email, password);
    }

}
