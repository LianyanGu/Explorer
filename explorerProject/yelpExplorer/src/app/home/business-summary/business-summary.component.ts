import {Component, Input, OnInit} from '@angular/core';
import {Business} from '../../models/Business';
import {BusinessService} from '../../business-page/business.service';

@Component({
  selector: 'app-business-summary',
  templateUrl: './business-summary.component.html',
  styleUrls: ['./business-summary.component.css']
})
export class BusinessSummaryComponent implements OnInit {
  @Input() business: Business;

  constructor(private businessService: BusinessService) {
  }

  ngOnInit() {
  }

  onClickBusiness() {
    this.businessService.setSelectedBusiness(this.business);
  }
}
