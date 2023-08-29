export class UserDto {
    login: string;
    email: string;
    userPassword: UserPasswordDto;

    constructor(
        login: string,
        email: string,
        password: string,
        newPassword: string,
        newRepeatedPassword: string
    ) {
        this.login = login;
        this.email = email;
        this.userPassword = new UserPasswordDto(password, newPassword, newRepeatedPassword)
    }
}

export class UserPasswordDto {

    password: string;
    newPassword: string;
    newRepeatedPassword: string;

    constructor(
        password: string,
        newPassword: string,
        newRepeatedPassword: string
    ) {
        this.password = password;
        this.newPassword = newPassword;
        this.newRepeatedPassword = newRepeatedPassword;
    }
}
