import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {StatusDto} from "../dto/StatusDto";
import {NewsDto} from "../dto/NewsDto";
import {TokenDto} from "../dto/TokenDto";
import {UserDto} from "../dto/UserDto";
import {BASE_URL} from "./config/BASE_URL";
import {AccountDto} from "../dto/AccountDto";

@Injectable({
    providedIn: 'root'
})
export class RestService {

    private baseUrl = BASE_URL

    constructor(
        private http: HttpClient
    ) {
    }

    getAllNewses() {
        return this.http.get<NewsDto[]>(this.baseUrl + '/pub/news');
    }

    // @ts-ignore
    getServerStatus() {
        // @ts-ignore
        return this.http.get<StatusDto>(this.baseUrl + '/pub/gameServers/status');
    }

    getNewsById(id: number) {
        return this.http.get<NewsDto>(this.baseUrl + '/pub/news/' + id);
    }

    getToken(email: string | null, password: string | null) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${email}:${password}`)
            })
        };
        return this.http.post<TokenDto>(this.baseUrl + '/pub/tokens', null, httpOptions);
    }


    getGreeting(token: string | undefined) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Не кодуємо токен
            })
        };
        return this.http.get<UserDto>(this.baseUrl + '/priv/users', httpOptions);
    }

    userRegistration(user: UserDto) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        // @ts-ignore
        return this.http.post<UserDto>(this.baseUrl + '/pub/users', user, httpOptions)
    }

    getProperties() {
        return this.http.get<Map<string, string>>(this.baseUrl + '/pub/gameServers/rates');
    }

    createAccount(user: AccountDto, token: string | undefined) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post<AccountDto>(this.baseUrl + '/priv/accounts', user, httpOptions);
    }

    changePassword(accountDto: AccountDto, token: string | undefined) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.patch<AccountDto>(this.baseUrl + '/priv/accounts/' + accountDto.login + '/password', accountDto, httpOptions);
    }

    getAllAccounts(token: string | undefined) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.get<AccountDto[]>(this.baseUrl + '/priv/accounts', httpOptions);
    }
}
