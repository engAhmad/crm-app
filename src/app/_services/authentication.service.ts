import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";
import {environment} from '../../environments/environment';

@Injectable()
export class AuthenticationService {
  apiUrl = environment.apiUrl;

  constructor(private http: Http) {
  }

  login(email: string, password: string) {
    return this.http.post(this.apiUrl + '/api/v1/auth/login', {email: email, password: password})
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
