import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {StatusDto} from "../dto/StatusDto";
import {NewsDto} from "../dto/NewsDto";
import {TokenDto} from "../dto/TokenDto";
import {UserDto, UserPasswordDto} from "../dto/UserDto";
import {BASE_URL} from "./config/BASE_URL";
import {AccountDto, AccountPasswordDto} from "../dto/AccountDto";
import {CharacterCountDto, CharacterDto, CommonStatisticDto} from "../dto/CommonStatisticDto";
import {TopTenPlayerDto} from "../dto/TopTenPlayerDto";
import {ClanDto} from "../dto/ClanDto";
import {CastleDto} from "../dto/CastleDto";
import {FortDto} from "../dto/FortDto";
import {UserEmailDto} from "../dto/UserEmailDto";
import {MessageDto} from "../dto/MessageDto";


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

    createAccount(user: AccountDto, token: string | null) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post<AccountDto>(this.baseUrl + '/priv/accounts', user, httpOptions);
    }

    changeAccountPassword(login: string, accountDto: AccountPasswordDto, token: string | null) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.patch<AccountDto>(this.baseUrl + '/priv/accounts/' + login + '/password', accountDto, httpOptions);
    }

    getAllAccounts(token: string | null) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.get<AccountDto[]>(this.baseUrl + '/priv/accounts', httpOptions);
    }

    getCommonStatistic() {
        let common: CommonStatisticDto = new CommonStatisticDto();

        this.http.get<number>(this.baseUrl + '/pub/clans/count')
            .subscribe(value => common.countClans = value.toString());
        this.http.get<number>(this.baseUrl + '/pub/clans/countAllys')
            .subscribe(value => common.countAllys = value.toString());
        this.http.get<CharacterCountDto>(this.baseUrl + '/pub/accounts/count')
            .subscribe(value => common.accCount = value);
        this.http.get<CharacterDto>(this.baseUrl + '/pub/characters/count')
            .subscribe(value => common.countAll = value);

        return common;
    }

    getTopTenPlayers() {
        let ttp: TopTenPlayerDto[] = []
        this.http.get<TopTenPlayerDto[]>(this.baseUrl + '/pub/characters/top10')
            .subscribe(value => value.forEach(value1 => {
                ttp.push(value1);
            }));
        return ttp;
    }

    getClans() {
        let ttp: ClanDto[] = []
        this.http.get<ClanDto[]>(this.baseUrl + '/pub/clans')
            .subscribe(value => value.forEach(value1 => {
                ttp.push(value1);
            }));
        return ttp;
    }

    getCastles() {
        let ttp: CastleDto[] = []
        this.http.get<CastleDto[]>(this.baseUrl + '/pub/castles')
            .subscribe(value => value.forEach(value1 => {
                ttp.push(value1);
            }));
        return ttp;
    }

    getForts() {
        let ttp: FortDto[] = []
        this.http.get<FortDto[]>(this.baseUrl + '/pub/forts')
            .subscribe(value => value.forEach(value1 => {
                ttp.push(value1);
            }));
        return ttp;
    }

    restorePassword(email: string) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        let userEmailDto=new UserEmailDto()
        userEmailDto.email = email;
        return this.http.post<UserDto>(this.baseUrl + '/pub/users/restorePassword', userEmailDto, httpOptions)
    }

    changeCabinetPassword(token: string | null, upd: UserPasswordDto) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.patch<UserDto>(this.baseUrl + '/priv/users/changePassword', upd, httpOptions);
    }

    sendMessage(token: string | null, messageDto: MessageDto) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post(this.baseUrl + '/priv/users/sendMessage', messageDto, httpOptions);
    }
}
