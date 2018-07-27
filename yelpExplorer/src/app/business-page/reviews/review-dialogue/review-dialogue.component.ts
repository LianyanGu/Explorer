import {Component, Inject, OnInit} from '@angular/core';
import {DialogData} from '../reviews.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Review} from '../../../models/Review';
import {ReviewsService} from '../reviews.service';
import {Business} from '../../../models/Business';

@Component({
  selector: 'app-review-dialogue',
  templateUrl: './review-dialogue.component.html',
  styleUrls: ['./review-dialogue.component.css']
})

export class ReviewDialogueComponent implements OnInit {
  date = new Date();

  newReview: Review = null;

  constructor(public dialogRef: MatDialogRef<ReviewDialogueComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private reviewsService: ReviewsService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  setDate() {
    this.date.setDate(17);
    this.date.setMonth(1);
    this.date.setFullYear(2017);
    this.date.setMinutes(17);
    this.date.setHours(9);
    this.date.setSeconds(17);
  }

  submitReview(data: DialogData) {
    this.newReview = new Review(data.businessId, data.stars, this.date, data.text, 0, 0, 0);
    console.log(this.newReview);
    this.reviewsService.addReview(this.newReview).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}

