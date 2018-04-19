import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ReviewView} from '../../models/ReviewView';
import {User} from '../../models/User';
import {Observable} from 'rxjs/Observable';

const BASE = environment.apiUrl;

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  domain = `${BASE}`;

  getUser(id: string): Observable<User> {
    const apiCall = 'user';
    const url = `${this.domain}/${apiCall}/${id}`;
    return this.httpClient.get<User>(url);
  }


}
