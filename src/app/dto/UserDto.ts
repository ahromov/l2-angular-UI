export class UserDto {
    login: string;
    email: string;
    roles?: string[];
    userPassword: UserPasswordDto;

    constructor(
        login: string,
        email: string,
        newPassword: string,
        newRepeatedPassword: string
    ) {
        this.login = login;
        this.email = email;
        this.userPassword = new UserPasswordDto(newPassword, newRepeatedPassword)
    }
}

export class UserPasswordDto {

    newPassword: string;
    newRepeatedPassword: string;

    constructor(
        newPassword: string,
        newRepeatedPassword: string
    ) {
        this.newPassword = newPassword;
        this.newRepeatedPassword = newRepeatedPassword;
    }
}
