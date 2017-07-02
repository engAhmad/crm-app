import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {User} from '../_models/index';
import {environment} from '../../environments/environment';
import 'rxjs/Rx';
@Injectable()
export class UserService {
  apiUrl = environment.apiUrl;

  constructor(private http: Http) {
  }

  getAll() {
    return this.http.get(this.apiUrl + '/api/v1/users', this.jwt())
      .map((response: Response) => response.json().data);
  }

  getById(id: number) {
    return this.http.get(this.apiUrl + '/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.post(this.apiUrl + '/api/users', user, this.jwt()).map((response: Response) => response.json());
  }

  update(user: User) {
    return this.http.put(this.apiUrl + '/api/users/' + user.user_id, user, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + '/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
      return new RequestOptions({headers: headers});
    }
  }
}
