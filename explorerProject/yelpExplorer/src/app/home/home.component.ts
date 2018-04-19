import {Component, Input, OnInit} from '@angular/core';
import {Review} from '../models/Review';
import {Business} from '../models/Business';
import {Tip} from '../models/Tip';
import {BusinessService} from '../business-page/business.service';
import {PagerService} from './business-summary/pager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  businessLoaded = false;
  businesses: Business[];
  businessId: string;
  @Input() city: string;
  pager: any = {};
  pagedItems: any[];
  @Input() businessName: string;

  constructor(private businessService: BusinessService,
              private pagerService: PagerService) {
  }

  ngOnInit() {
  }

  getBusinessesByCity(city: string) {
    this.businessService.getBusinessesByCity(city)
      .subscribe(
        (response) => {
          this.businessLoaded = true;
          this.businesses = response;
          this.setPage(1);
        }
      );
  }

  getBusinessByName(businessName: string) {
    this.businessService.getBusinessesByName(businessName)
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
