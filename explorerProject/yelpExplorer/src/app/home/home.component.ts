import {Component, Input, OnInit} from '@angular/core';
import {Review} from '../models/Review';
import {Business} from '../models/Business';
import {Tip} from '../models/Tip';
import {BusinessService} from '../business-page/business.service';
import {PagerService} from './business-summary/pager.service';
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
          this.getBusinessesByCityAndName(this.city, this.businessName);
        }
      );
  }

  getBusinessesByCityAndName(city: string, name: string) {
    this.businessService.getBusinessByCityAndName(city, name)
      .subscribe(
        (response) => {
          this.businessLoaded = true;
          this.businesses = response;
          this.setPage(1);
        }
      );
  }


  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.businesses.length, page);

    // get current page of items
    this.pagedItems = this.businesses.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }


}
