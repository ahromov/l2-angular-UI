export class AccountDto {
    login: string;
    email: string;
    accountPassword: AccountPasswordDto;

    constructor(
        login: string,
        email: string,
        password: string,
        newPassword: string,
        newRepeatedPassword: string
    ) {
        this.login = login;
        this.email = email;
        this.accountPassword = new AccountPasswordDto(password, newPassword, newRepeatedPassword)
    }
}

export class AccountPasswordDto {

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
