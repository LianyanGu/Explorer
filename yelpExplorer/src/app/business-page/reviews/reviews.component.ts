import {Component, Inject, Input, OnInit} from '@angular/core';
import {ReviewsService} from './reviews.service';
import {ReviewView} from '../../models/ReviewView';
import {PagerService} from '../../pager.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {ReviewDialogueComponent} from './review-dialogue/review-dialogue.component';
import {Business} from '../../models/Business';
import {BusinessService} from '../business.service';

export interface DialogData {
  businessName: string;
  stars: number;
  text: string;
  userId: string;
  businessId: string;
}

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
  text: string;
  starsGiven: number;
  userId: string;
  businessName: string;
  searchKeyword = '';
  searched = false;
  filteredReviewList = [];

  constructor(private reviewsService: ReviewsService,
              private pagerService: PagerService,
              private businessService: BusinessService,
              public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ReviewDialogueComponent, {
      width: '700px',
      data: {
        stars: this.starsGiven, text: this.text,
        userId: this.userId, businessName: this.businessName,
        businessId: this.businessId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      console.log(this.businessId);
      this.starsGiven = result;
    });
  }

  ngOnInit() {
    this.reviewsService.getReviewsByBusinessId(this.businessId)
      .subscribe(
        (response) => {
          this.reviews = response;
          this.setPage(1);
        }
      );
    this.getBusinessName(this.businessId);
  }

  getBusinessName(businessId: string) {
    this.businessService.getSelectedBusiness(businessId).subscribe(
      (selectedBusiness: Business) => {
        this.businessName = selectedBusiness.name;
      }
    );
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    console.log('inside set page' + this.searched);
    if (this.searched) {
      console.log('you have searched');
      this.pager = this.pagerService.getPager(this.filteredReviewList.length, page);
      this.pagedItems = this.filteredReviewList.slice(this.pager.startIndex, this.pager.endIndex + 1);
    } else {
      this.pager = this.pagerService.getPager(this.reviews.length, page);
      this.pagedItems = this.reviews.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
  }

  filterReviews(searchKeyword: string) {
    this.searched = true;
    console.log('inside filterReviews' + this.searched);
    this.filteredReviewList = this.reviews.filter(
      (reviewView) => reviewView.text.toLowerCase().includes(this.searchKeyword.toLowerCase())
    );
    console.log(this.filteredReviewList);
  }


}

