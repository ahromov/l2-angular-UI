export class AccountDto {

    public login!: string;
    public email!: string;
    accountPassword: AccountPasswordDto = new AccountPasswordDto();

}

export class AccountPasswordDto {

    public newPassword?: string;
    public newRepeatedPassword?: string;

}
