import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class AuthService {
    constructor(private http: Http) {

    }
    login(email: string, password: string) {
        //@todo use env vars
        return this.http.post('http://crm.dev/api/v1/auth/login',
            {email: email, password: password})
            .map(
                (response: Response) => {
                    const token = response.json().data.token;
                    const base64Url = token.split('.')[1];
                    const base64 = base64Url.replace('-', '+').replace('_', '/');
                    return {token: token, decoded: JSON.parse(window.atob(base64))};
                }
            )
            .do(
                tokenData => {
                    localStorage.setItem('token', tokenData.token);
                }
            );
    }

    getToken() {
        return localStorage.getItem('token');
    }
}