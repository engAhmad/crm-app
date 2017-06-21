import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) {
    }

    login(email: string, password: string) {
//@todo api_url
        return this.http.post('http://crm.dev/api/v1/auth/login', {email: email, password: password})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json().data;
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            });
    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}