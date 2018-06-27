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

  addReview(businessId: string, userId: string, stars: number, text: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const apiCall = 'addReview';
    this.userService.getUser('QfRT_kE-eYlzbxCO81xctQ')
      .subscribe(
        (response) => {
          console.log('success');
          this.user = response;
        }
      );
    const review = new ReviewView(businessId, userId, stars, 'date',
      text, 0, 0, 0, this.user.userName, this.user.reviewCount,
      this.user.yelpingSince);
    const url = `${this.domain}/${apiCall}`;
    return this.httpClient.post(url, review, httpOptions);
  }


}
