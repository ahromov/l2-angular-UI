import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {RestService} from '../../service/rest.service';
import {Router} from "@angular/router";
import {ReCaptchaV3Service} from "ng-recaptcha";

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

    logedIn: boolean = false;
    errorMessage: string | null | undefined;

    constructor(
        private restService: RestService,
        private formBuilder: FormBuilder,
        private router: Router,
        private recaptchaV3Service: ReCaptchaV3Service
    ) {
        // let item = localStorage.getItem('token');
        // if (item !== null) this.logedIn = true;
    }

    onLogin(): void {
        this.recaptchaV3Service.execute('importantAction')
            .subscribe((token: string) => {
                this.restService.chaptchaValidate(token).subscribe({
                    next: value => {
                        this.doLogin();
                    },
                    error: err => {
                        console.debug(err.errorMessage);
                    }
                })
            });
    }

    doLogin() {
        let email = this.checkoutForm.controls['email'].value;
        let password = this.checkoutForm.controls['password'].value;
        this.restService.getAuthToken(email, password).subscribe({
            next: (value) => {
                if (value.token) {
                    localStorage.setItem('token', value.token)
                    this.logedIn = true;
                    this.checkoutForm.reset();
                    this.restService.getGreeting(value.token).subscribe(value => {
                        if (value.roles?.includes('ADMIN')) {
                            this.router.navigate(['/cabinet-admin', 'ADMIN']);
                        } else {
                            this.router.navigate(['/cabinet-user', 'USER']);
                        }
                    })
                }
                return true;
            },
            error: () => {
                this.errorMessage = 'User not exists or incorrect password... '
                return false;
            }
        });
    }

}
