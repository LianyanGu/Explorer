import {Component, Input, OnInit} from '@angular/core';
import {BusinessService} from '../../../business.service';
import {Business} from '../../../../models/Business';

@Component({
  selector: 'app-user-business-summary',
  templateUrl: './user-business-summary.component.html',
  styleUrls: ['./user-business-summary.component.css']
})
export class UserBusinessSummaryComponent implements OnInit {
  @Input() businessId: string;
  business: Business;

  constructor(private businessService: BusinessService) {
  }

  ngOnInit() {
    this.businessService.getBusinessById(this.businessId)
      .subscribe(
        (response) => {
          this.business = response;
        }
      );
  }

}
