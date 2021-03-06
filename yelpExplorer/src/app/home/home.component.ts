import {Component, OnInit} from '@angular/core';
import {Business} from '../models/Business';
import {BusinessService} from '../business-page/business.service';
import {PagerService} from '../pager.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  businessLoaded = false;
  businesses: Business[];
  businessId: string;
  city: string;
  pager: any = {};
  pagedItems: any[];
  businessName: string;
  errorMsg: string;
  backgroundColor: string;
  error = false;

  constructor(private businessService: BusinessService,
              private pagerService: PagerService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(
        (params: Params) => {
          this.city = params['city'];
          this.businessName = params['businessName'];
          if (!this.city) {
            this.businessLoaded = false;
            this.error = true;
            this.errorMsg = 'Please input the city name you want to search in';
          } else if (!this.businessName) {
            this.getBusinessByCity(this.city);
          } else {
            this.getBusinessesByCityAndName(this.city, this.businessName);
          }
        }
      );
  }

  getBusinessByCity(city: string) {
    this.clearBusinesses();
    this.businessService.getBusinessesByCity(city)
      .subscribe(
        (response) => {
          if (response.length !== 0) {
            this.businessLoaded = true;
            this.businesses = response;
            this.setPage(1);
          } else {
            this.businessLoaded = false;
            this.error = true;
            this.errorMsg = 'Cannot find business based on the city you input';
          }
        }
      );
  }

  // TODO: CHECK IF THIS LOGIC IS GOOD, IF CANNOT FIND BUSINESS BASED ON USER INPUT
  getBusinessesByCityAndName(city: string, name: string) {
    this.clearBusinesses();
    this.businessService.getBusinessByCityAndName(city, name)
      .subscribe(
        (response) => {
          if (response.length !== 0) {
            this.businessLoaded = true;
            this.businesses = response;
            this.setPage(1);
          } else {
            this.error = true;
            this.businessLoaded = false;
            this.errorMsg = 'Cannot find business based on the city and businessName you input';
          }
        }
      );
  }

  clearBusinesses() {
    this.businesses = [];
    this.pagedItems = [];
    this.pager = {};
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.pagerService.getPager(this.businesses.length, page);
    this.pagedItems = this.businesses.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
