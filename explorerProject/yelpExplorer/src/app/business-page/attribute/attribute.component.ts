import {Component, Input, OnInit} from '@angular/core';
import {BusinessService} from '../business.service';
import {Attribute} from '../../models/Attribute';
import {Business} from '../../models/Business';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  @Input() business;
  @Input() attribute;
  attributeJson: any;
  attributeValue = '';
  showAttributeName = true;
  numOfAttributeValue = 0;

  constructor(private businessService: BusinessService) {
  }

  ngOnInit() {
    if (this.attribute.value === '0') {
      this.attributeValue = 'No';
    } else if (this.attribute.name !== 'RestaurantsPriceRange2' && this.attribute.value === '1') {
      this.attributeValue = 'Yes';
    } else if (this.attribute.name === 'RestaurantsPriceRange2') {
      // Case where display the prices
    } else if (!this.attribute.value.includes('{')) {
      this.attributeValue = this.attribute.value;
    } else {
      this.attributeJson = JSON.parse(this.attribute.value);
      for (const key of Object.keys(this.attributeJson)) {
        if (this.numOfAttributeValue === 0) {
          if (this.attributeJson[key]) {
            this.attributeValue += key;
            this.numOfAttributeValue += 1;
          }
        } else {
          if (this.attributeJson[key]) {
            this.attributeValue += (',' + key);
          }
        }
      }
      if (this.attributeValue.length === 0) {
        this.showAttributeName = false;
      }
    }
  }


}
