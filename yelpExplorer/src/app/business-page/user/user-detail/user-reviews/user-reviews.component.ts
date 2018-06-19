import {Component, Input, OnInit} from '@angular/core';
import {ReviewView} from '../../../../models/ReviewView';
import {BusinessService} from '../../../business.service';
import {Business} from '../../../../models/Business';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.css']
})
export class UserReviewsComponent implements OnInit {

  @Input() review: ReviewView;
  business: Business;

  constructor(private businessService: BusinessService) {
  }

  ngOnInit() {
    this.getBusiness(this.review.businessId);
  }

  getBusiness(businessId: string) {
    this.businessService.getBusinessById(businessId)
      .subscribe(
        (response) => {
          this.business = response;
        }
      );
  }
}
