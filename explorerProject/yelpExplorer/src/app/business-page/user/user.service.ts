import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from '../../models/User';
import {Observable} from 'rxjs/Observable';
import {Friend} from '../../models/Friend';

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

  getFriendsByUser(userId: string): Observable<Friend[]> {
    const apiCall = 'friends';
    const url = `${this.domain}/${apiCall}/${userId}`;
    return this.httpClient.get<Friend[]>(url);
  }


}
