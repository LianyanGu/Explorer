import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TipView} from '../../models/TipView';
import {ReviewView} from '../../models/ReviewView';
import {Review} from '../../models/Review';
import {Tip} from '../../models/Tip';

const BASE = environment.apiUrl;

@Injectable()
export class TipsService {

  constructor(private httpClient: HttpClient) {
  }

  domain = `${BASE}`;

  getTipByBusinessId(businessId: string) {
    const apiCall = 'tips';
    const url = `${this.domain}/${apiCall}/${businessId}`;
    return this.httpClient.get<TipView[]>(url);
  }

  getTipsByUserId(userId: string) {
    const apiCall = 'tips';
    const url = `${this.domain}/${userId}/${apiCall}`;
    return this.httpClient.get<TipView[]>(url);
  }

  addTip(tip: Tip) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const apiCall = 'addTip';
    const url = `${this.domain}/${apiCall}`;
    console.log('inside addTip in tip service');
    console.log(tip);
    return this.httpClient.post(url, tip, httpOptions);
  }
}
