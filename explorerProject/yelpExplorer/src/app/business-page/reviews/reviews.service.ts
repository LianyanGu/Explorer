import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ReviewView} from '../../models/ReviewView';

const BASE = environment.apiUrl;

@Injectable()
export class ReviewsService {

  constructor(private httpClient: HttpClient) {
  }

  domain = `${BASE}`;

  getReviewByBusinessId(businessId: string) {
    const apiCall = 'reviews';
    const url = `${this.domain}/${apiCall}/${businessId}`;
    return this.httpClient.get<ReviewView[]>(url);
  }



}
