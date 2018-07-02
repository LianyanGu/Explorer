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
  review: ReviewView;

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

  // addReview(businessId: string, userId: string, stars: number, text: string) {
  //   // const httpOptions = {
  //   //   headers: new HttpHeaders({'Content-Type': 'application/json'})
  //   // };
  //   // const apiCall = 'addReview';
  //   // const $user = this.userService.getUser('QfRT_kE-eYlzbxCO81xctQ');
  //   // $user.subscribe(
  //   //   (response) => {
  //   //     this.user = response;
  //   //     this.userName = this.user.userName;
  //   //     this.reviewCount = this.user.reviewCount;
  //   //     this.yelpingSince = this.user.yelpingSince;
  //   //     this.review = new ReviewView(businessId, userId, stars, 'date',
  //   //       text, 0, 0, 0, this.userName, this.reviewCount,
  //   //       this.yelpingSince);
  //   //   });
  //   // const url = `${this.domain}/${apiCall}`;
  //   // return this.httpClient.post(url, this.review, httpOptions).subscribe(() => 'review added');
  //   //
  //
  // }


}
