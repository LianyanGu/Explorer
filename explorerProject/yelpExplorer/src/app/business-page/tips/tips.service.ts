import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {TipView} from '../../models/TipView';

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

}
