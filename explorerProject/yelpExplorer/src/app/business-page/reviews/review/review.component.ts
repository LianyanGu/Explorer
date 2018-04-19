import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() review;
  userId: string;

  constructor() {
  }

  ngOnInit() {
    this.userId = this.review.userId;
  }

  getNumberOfStars() {
    return 'value-' + this.review.stars;
  }

}
