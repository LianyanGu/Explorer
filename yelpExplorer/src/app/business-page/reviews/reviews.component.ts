import {Component, Input, OnInit} from '@angular/core';
import {ReviewsService} from './reviews.service';
import {ReviewView} from '../../models/ReviewView';
import {PagerService} from '../../pager.service';
import {Review} from '../../models/Review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() businessId: string;
  reviews: ReviewView[];
  pager: any = {};
  pagedItems: any[];
  newReview: string;


  constructor(private reviewsService: ReviewsService,
              private pagerService: PagerService) {
  }

  ngOnInit() {
    this.reviewsService.getReviewsByBusinessId(this.businessId)
      .subscribe(
        (response) => {
          this.reviews = response;
          this.setPage(1);
        }
      );
  }

  // addReview() {
  //   this.reviewsService.addReview(new Review(this.businessId, 5, '2018/01/01', this.newReview, 0, 0, 0))
  //     .subscribe(
  //       (response) => {
  //         console.log(response);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.reviews.length, page);
    // get current page of items
    this.pagedItems = this.reviews.slice(this.pager.startIndex, this.pager.endIndex + 1);

  }


}
