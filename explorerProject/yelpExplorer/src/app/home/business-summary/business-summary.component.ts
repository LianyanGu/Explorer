import {Component, Input, OnInit} from '@angular/core';
import {Business} from '../../models/Business';
import {BusinessService} from '../../business-page/business.service';
import {Category} from '../../models/Category';
import {Photo} from '../../models/Photo';

@Component({
  selector: 'app-business-summary',
  templateUrl: './business-summary.component.html',
  styleUrls: ['./business-summary.component.css']
})
export class BusinessSummaryComponent implements OnInit {
  @Input() business: Business;
  @Input() index: number;
  categories: Category[];
  priceRange: number;
  categoryNameList = [];
  categoryNames: string;
  photo: Photo;
  photoUrl: string;

  constructor(private businessService: BusinessService) {
  }

  ngOnInit() {
    this.categories = this.business.categories;
    this.getPriceRange();
    this.loadCategories();
    this.loadPhotoList();
  }

  onClickBusiness() {
    this.businessService.setSelectedBusiness(this.business);
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

  loadCategories() {
    for (const category of this.categories) {
      this.categoryNameList.push(category.category);
    }
    this.categoryNames = this.categoryNameList.join(', ');
  }

  loadPhotoList() {
    this.businessService.getPhotoListByBusinessId(this.business.id)
      .subscribe(
        (response) => {
          this.photo = response[0];
          if (this.photo !== undefined) {
            this.photoUrl = 'http://localhost:9090/photo/' + this.photo.id;
          }
        }
      );
  }
}
