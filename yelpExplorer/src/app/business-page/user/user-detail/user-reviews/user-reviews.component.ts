import {Component, Input, OnInit} from '@angular/core';
import {ReviewView} from '../../../../models/ReviewView';
import {BusinessService} from '../../../business.service';
import {Business} from '../../../../models/Business';
import {Category} from '../../../../models/Category';
import {Photo} from '../../../../models/Photo';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.css']
})
export class UserReviewsComponent implements OnInit {

  @Input() review: ReviewView;
  business: Business;
  categories: Category[];
  categoryNames: string;
  categoryNameList = [];
  photoUrl: string;
  photo: Photo;

  constructor(private businessService: BusinessService) {
  }

  ngOnInit() {
    this.getBusiness(this.review.businessId);
  }

  getBusiness(businessId: string) {
    this.businessService.getBusinessById(businessId)
      .subscribe(
        (response) => {
          this.business = response;
          this.categories = this.business.categories;
          this.loadCategories();
          this.loadPhotoList();
        }
      );
  }

  onClickBusiness() {
    this.businessService.setSelectedBusiness(this.business);
  }

  getNumberOfStars() {
    return 'value-' + Math.floor(this.review.stars);
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
