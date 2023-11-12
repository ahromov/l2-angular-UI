import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {RestService} from "../service/rest.service";

@Injectable()
export class AuthGuard implements CanActivate {

    roles: string[] | undefined = [];

    constructor(
        private authService: RestService,
        private router: Router
    ) {
        let token = localStorage.getItem('token');
        this.authService.getGreeting(token?.toString()).subscribe({
            next: value => {
                value.roles?.forEach(value1 => {
                    this.roles?.push(value1);
                });
            },
            error: err => {
            }
        })
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let access = route.paramMap.get('access');
        return !!(access === 'ADMIN' || 'USER');
    }
}
