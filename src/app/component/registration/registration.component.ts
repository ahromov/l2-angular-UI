import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {RestService} from "../../service/rest.service";
import {UserDto} from "../../dto/UserDto";
import {ReCaptchaV3Service} from "ng-recaptcha";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    isRegistered: boolean = false;
    greeting: string | undefined;
    errMessage?: string;

    registrationForm: any = this.formBuilder.group({
        login: '',
        email: '',
        password1: '',
        password2: ''
    });

    constructor(
        private restService: RestService,
        private formBuilder: FormBuilder,
        private recaptchaV3Service: ReCaptchaV3Service
    ) {
    }

    onSubmit() {
        this.recaptchaV3Service.execute('importantAction')
            .subscribe((token: string) => {
                this.restService.chaptchaValidate(token).subscribe({
                    next: value => {
                        this.doSignUp();
                    },
                    error: err => {
                        console.debug(err.errorMessage);
                    }
                })
            });
    }

    private doSignUp() {
        let user = this.buildUser();
        this.restService.userRegistration(user).subscribe(
            {
                next: value => {
                    this.registrationForm.reset();
                    this.greeting = 'Welcome ' + value.email + '!';
                    this.isRegistered = true;
                },
                error: err => {
                    if (err.status == 409)
                        this.errMessage = 'User with email ' + user.email+ ' already exist!'
                    else{
                        this.errMessage = 'Somthing wrong...( ' + err.status;
                        console.error();
                    }
                }
            })
    }

    private buildUser() {
        let login = this.registrationForm.controls['login'].value;
        let email = this.registrationForm.controls['email'].value;
        let password1 = this.registrationForm.controls['password1'].value;
        let password2 = this.registrationForm.controls['password2'].value;
        return new UserDto(login, email, password1, password2);
    }
}
