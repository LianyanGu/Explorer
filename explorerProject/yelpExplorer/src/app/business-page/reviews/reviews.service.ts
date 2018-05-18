import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ReviewView} from '../../models/ReviewView';
import {Review} from '../../models/Review';
import {Observable} from 'rxjs/Observable';

const BASE = environment.apiUrl;

@Injectable()
export class ReviewsService {

  constructor(private httpClient: HttpClient) {
  }

  domain = `${BASE}`;

  getReviewsByBusinessId(businessId: string) {
    const apiCall = 'reviews';
    const url = `${this.domain}/${apiCall}/${businessId}`;
    return this.httpClient.get<ReviewView[]>(url);
  }

  getReviewsByUserId(userId: string) {
    const apiCall = 'reviews';
    const url = `${this.domain}/${userId}/${apiCall}`;
    return this.httpClient.get<ReviewView[]>(url);
  }

  addReview(review: Review): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const apiCall = 'review';
    const url = `${this.domain}/${apiCall}`;
    return this.httpClient.post(url, review, httpOptions);
  }


}
