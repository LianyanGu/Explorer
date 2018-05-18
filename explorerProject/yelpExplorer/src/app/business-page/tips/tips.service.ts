import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {TipView} from '../../models/TipView';
import {ReviewView} from '../../models/ReviewView';

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
}
