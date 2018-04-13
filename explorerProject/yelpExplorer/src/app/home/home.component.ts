import {Component, OnInit} from '@angular/core';
import {HomeServerService} from '../home-server.service';
import {Review} from '../models/Review';
import {Business} from '../models/Business';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reviews: Review[];
  reviewLoaded = false;
  businessLoaded = false;
  businesses: Business[];
  businessId: string;

  constructor(private homeServerService: HomeServerService) {
  }

  ngOnInit() {
  }

  getBusiness() {
    this.homeServerService.getAllBusinesses()
      .subscribe(
        (response) => {
          this.businessLoaded = true;
          console.log(response[0].content);
          this.businesses = response[0].content;
        },
        (error) => console.log(error)
      );
  }

  getReviewByBusinessId(businessId: string) {
    this.homeServerService.getReviewByBusinessId(this.businessId)
      .subscribe(
        (response) => {
          this.reviewLoaded = true;
          this.reviews = response;
        },
        (error) => console.log(error)
      );
  }

}
