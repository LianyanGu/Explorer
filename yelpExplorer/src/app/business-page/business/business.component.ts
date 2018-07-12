import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Business} from '../../models/Business';
import {BusinessService} from '../business.service';
import {Category} from '../../models/Category';
import {Photo} from '../../models/Photo';
import {AdvancedLayout, Image, PlainGalleryConfig, PlainGalleryStrategy} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  @Input() business: Business;
  priceRange: number;
  addressList = [];
  address: string;
  categories: Category[];
  categoryNameList = [];
  categoryNames: string;
  newReview: string;
  photosList: Photo[];
  images: Image[] = [];
  customPlainGalleryRowConfig: PlainGalleryConfig;
  allPhotoVisible = false;
  @Output() displayAllPhotos = new EventEmitter<boolean>();

  constructor(private businessService: BusinessService) {
  }

  ngOnInit() {
    this.categories = this.business.categories;
    this.getPriceRange();
    this.parseAddress();
    this.loadCategoies();
    this.loadPhotoList();
    this.customPlainGalleryRowConfig = {
      strategy: PlainGalleryStrategy.CUSTOM,
      layout: new AdvancedLayout(-1, true)
    };
  }

  openImageModalRow(image: Image) {
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, {layout: new AdvancedLayout(index, true)});
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
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

  loadCategoies() {
    for (const category of this.categories) {
      this.categoryNameList.push(category.category);
    }
    this.categoryNames = this.categoryNameList.join(', ');
  }


  addReview() {
    console.log(this.newReview);
  }

  createImages(photosList: Photo[]) {
    const imageList = [];
    for (let i = 0; i < photosList.length; i++) {
      const modalImage = {
        img: 'http://localhost:9090/photo/' + photosList[i].id,
        description: photosList[i].caption
      };
      const image = new Image(i, modalImage);
      imageList.push(image);
    }
    return imageList;
  }

  loadPhotoList() {
    this.businessService.getPhotoListByBusinessId(this.business.id)
      .subscribe(
        (response) => {
          this.photosList = response;
          this.images = this.createImages(this.photosList);
        }
      );
  }

  showAllPhotos() {
    this.allPhotoVisible = true;
    this.displayAllPhotos.emit(this.allPhotoVisible);
  }

  hidePhotos() {
    this.allPhotoVisible = false;
    this.displayAllPhotos.emit(this.allPhotoVisible);

  }

}
