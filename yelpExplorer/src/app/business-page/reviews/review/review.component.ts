import {Component, Input, OnInit} from '@angular/core';
import {ReviewsService} from '../reviews.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() review;
  userId: string;
  labelAlreadyClicked = false;
  useFulLabelAlreadyClicked = false;
  coolLabelAlreadyClicked = false;
  funnyLabelAlreadyClicked = false;

  constructor(private reviewsService: ReviewsService) {
  }

  ngOnInit() {
    console.log(this.review);
    this.userId = this.review.userId;
  }

  getNumberOfStars() {
    return 'value-' + Math.floor(this.review.stars);
  }

  reviewLabelClicked(label: string) {
    switch (label) {
      case 'useful':
        this.review.useful += this.useFulLabelAlreadyClicked ? -1 : 1;
        this.useFulLabelAlreadyClicked = !this.useFulLabelAlreadyClicked;
        console.log(this.review);
        break;
      case 'funny':
        this.review.funny += this.funnyLabelAlreadyClicked ? -1 : 1;
        this.funnyLabelAlreadyClicked = !this.funnyLabelAlreadyClicked;
        console.log(this.review);
        break;
      case 'cool':
        this.review.cool += this.coolLabelAlreadyClicked ? -1 : 1;
        this.coolLabelAlreadyClicked = !this.coolLabelAlreadyClicked;
        console.log(this.review);
        break;
    }
    console.log('about to update');
  }

}
