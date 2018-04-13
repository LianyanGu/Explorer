import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Review} from './models/Review';
import {Business} from './models/Business';


const BASE = environment.apiUrl;

@Injectable()
export class HomeServerService {
  constructor(private httpClient: HttpClient) {
  }

  domain = `${BASE}`;

  getAllBusinesses() {
    return this.httpClient.get('http://localhost:9090/businesses/pages?page=1');
  }

  getReviewByBusinessId(businessId: string) {
    const apiCall = 'reviews';
    const url = `${this.domain}/${apiCall}/${businessId}`;
    return this.httpClient.get<Review[]>(url);
  }
}
