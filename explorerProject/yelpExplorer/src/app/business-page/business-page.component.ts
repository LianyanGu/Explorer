import {Component, Input, OnInit} from '@angular/core';
import {Business} from '../models/Business';
import {BusinessService} from './business.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Attribute} from '../models/Attribute';

@Component({
  selector: 'app-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.css'],
})
export class BusinessPageComponent implements OnInit {
  businesses: Business[];
  business: Business;
  businessId: string;
  attributes: Attribute[];

  constructor(private businessService: BusinessService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.businessId = params['businessId'];
          this.getBusiness(this.businessId);
        }
      );
  }

  getBusiness(businessId: string) {
    this.businessService.getSelectedBusiness(businessId).subscribe(
      (selectedBusiness: Business) => {
        this.business = selectedBusiness;
        this.attributes = this.business.attributes;
      }
    );
  }
}
