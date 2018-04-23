import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
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

  // businessId = this.route.snapshot.params['businessId'];

  // @ViewChild(AttributeComponent) child: AttributeComponent;

  constructor(private businessService: BusinessService) {
  }

  ngOnInit() {
    this.isOpen = this.business.isOpen === 1 ? 'Business is open' : 'Business is not open';
    this.priceRange = this.business.attributes['RestaurantsPriceRange2']
  }

  // ngAfterViewInit() {
  //   console.log('ngafterviewinit loads');
  //   console.log(this.child);
  // }

  getNumberOfStars() {
    return 'value-' + Math.floor(this.business.stars);
  }


}
