import {Component, Input, OnInit} from '@angular/core';
import {TipView} from '../../../../models/TipView';
import {BusinessService} from '../../../business.service';
import {Business} from '../../../../models/Business';

@Component({
  selector: 'app-user-tips',
  templateUrl: './user-tips.component.html',
  styleUrls: ['./user-tips.component.css']
})
export class UserTipsComponent implements OnInit {
  @Input() tip: TipView;
  business: Business;

  constructor(private businessService: BusinessService) {
  }

  ngOnInit() {
    this.getBusinessName(this.tip.businessId);
  }

  getBusinessName(businessId: string) {
    this.businessService.getBusinessById(businessId)
      .subscribe(
        (response) => {
          this.business = response;
        }
      );
  }

  onClickBusiness() {
    this.businessService.setSelectedBusiness(this.business);
  }

}
