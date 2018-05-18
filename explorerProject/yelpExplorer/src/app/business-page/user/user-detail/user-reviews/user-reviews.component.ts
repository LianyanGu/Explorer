import {Component, Input, OnInit} from '@angular/core';
import {ReviewView} from '../../../../models/ReviewView';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.css']
})
export class UserReviewsComponent implements OnInit {

  @Input() review: ReviewView;

  constructor() {
  }

  ngOnInit() {
  }


}
