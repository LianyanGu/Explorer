import {AfterViewInit, Component, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Business} from '../../models/Business';
import {BusinessService} from '../business.service';
import {AttributeComponent} from '../attributes/attribute/attribute.component';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  @Input() business: Business;
  isOpen: string;
  priceRange: number;
  addressList = [];
  address: string;

  constructor(private businessService: BusinessService) {
  }

  ngOnInit() {
    this.isOpen = this.business.isOpen === 1 ? 'Business is open' : 'Business is not open';
    this.getPriceRange();
    this.parseAddress();
  }

  getNumberOfStars() {
    return 'value-' + Math.floor(this.business.stars);
  }

  getPriceRange() {
    for (const attribute of this.business.attributes) {
      if (attribute['name'] === 'RestaurantsPriceRange2') {
        this.priceRange = +attribute['value'];
      }
    }
  }

  parseAddress() {
    if (this.business.address) {
      this.addressList.push(this.business.address);
    }
    if (this.business.city) {
      this.addressList.push(this.business.city);
    }
    if (this.business.state) {
      this.addressList.push(this.business.state);
    }
    if (this.business.postalCode) {
      this.addressList.push(this.business.postalCode);
    }
    this.address = this.addressList.join(', ');
  }


}
