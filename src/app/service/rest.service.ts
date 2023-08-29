import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {StatusDto} from "../dto/StatusDto";
import {NewsDto} from "../dto/NewsDto";
import {TokenDto} from "../dto/TokenDto";
import {GreetingDto} from "../dto/GreetingDto";
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
        return this.http.get<NewsDto[]>(this.baseUrl + '/news/all');
    }

    // @ts-ignore
    getServerStatus() {
        // @ts-ignore
        return this.http.get<StatusDto>(this.baseUrl + '/gs/status');
    }

    getNewsById(id: number) {
        return this.http.get<NewsDto>(this.baseUrl + '/news/get/' + id);
    }

    getToken(email: string | null, password: string | null) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${email}:${password}`)
            })
        };
        return this.http.post<TokenDto>(this.baseUrl + '/token', null, httpOptions);
    }


    getGreeting(token: string | undefined) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Не кодуємо токен
            })
        };
        return this.http.get<GreetingDto>(this.baseUrl + '/users', httpOptions);
    }

    userRegistration(user: UserDto) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        // @ts-ignore
        return this.http.put<UserDto>(this.baseUrl + '/users/create', user, httpOptions)
    }

    getProperties() {
        return this.http.get<Map<string, string>>(this.baseUrl + '/gs/rates');
    }

    createAccount(user: AccountDto, token: string | undefined) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post<AccountDto>(this.baseUrl + '/accounts/create', user, httpOptions);
    }

    changePassword(accountDto: AccountDto, token: string | undefined) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.patch<AccountDto>(this.baseUrl + '/accounts/changePassword', accountDto, httpOptions);
    }

    getAllAccounts(token: string | undefined) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.get<AccountDto[]>(this.baseUrl + '/accounts', httpOptions);
    }
}
