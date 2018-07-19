import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() review;
  userId: string;
  labelAlreadyClicked = false;

  constructor() {
  }

  ngOnInit() {
    this.userId = this.review.userId;
  }

  getNumberOfStars() {
    return 'value-' + Math.floor(this.review.stars);
  }

  reviewLabelClicked(label: string) {
    switch (label) {
      case 'useful':
        this.review.useful += this.labelAlreadyClicked ? -1 : 1;
        break;
      case 'funny':
        this.review.funny += this.labelAlreadyClicked ? -1 : 1;
        break;
      case 'cool':
        this.review.cool += this.labelAlreadyClicked ? -1 : 1;
        break;
    }
    this.labelAlreadyClicked = !this.labelAlreadyClicked;
  }

}
