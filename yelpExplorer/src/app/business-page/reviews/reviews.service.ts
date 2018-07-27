import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ReviewView} from '../../models/ReviewView';
import {Review} from '../../models/Review';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../user/user.service';
import {User} from '../../models/User';

const BASE = environment.apiUrl;

@Injectable()
export class ReviewsService {

  user: User;
  userName: string;
  reviewCount: number;
  yelpingSince: string;
  review: Review;

  constructor(private httpClient: HttpClient, private userService: UserService) {
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

  addReview(review: Review) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const apiCall = 'addReview';
    const url = `${this.domain}/${apiCall}`;
    return this.httpClient.post(url, review, httpOptions);
  }

  updateReview(reviewView: ReviewView) {
    console.log('calling update Review');
    const apiCall = 'review';
    const url = `${this.domain}/${apiCall}`;
    return this.httpClient.put(url, reviewView);
  }


}
