import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {RestService} from "../service/rest.service";
import {UserDto} from "../dto/UserDto";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    isRegistered: boolean = false;
    greeting: string | undefined;

    registrationForm: any = this.formBuilder.group({
        login: '',
        email: '',
        password1: '',
        password2: ''
    });

    constructor(
        private restService: RestService,
        private formBuilder: FormBuilder,
    ) {
    }

    onSubmit() {
        let user = this.buildUser();
        this.restService.userRegistration(user).subscribe(value => {
            this.greeting = 'Welcome ' + value.email + '!';
            this.isRegistered = true;
        })
    }

    private buildUser() {
        let login = this.registrationForm.controls['login'].value;
        let email = this.registrationForm.controls['email'].value;
        let password1 = this.registrationForm.controls['password1'].value;
        let password2 = this.registrationForm.controls['password2'].value;
        return new UserDto(login, email, '', password1, password2);
    }
}
