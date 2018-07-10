import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../../models/Photo';
import {AdvancedLayout, Image, PlainGalleryConfig, PlainGalleryStrategy} from 'angular-modal-gallery';
import {BusinessService} from '../business.service';
import {Business} from '../../models/Business';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photosList: Photo[];
  images: Image[] = [];
  customPlainGalleryRowConfig: PlainGalleryConfig;
  @Input() business: Business;
  photoLabels = new Array<string>();

  constructor(private businessService: BusinessService) {
  }

  ngOnInit() {
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
          this.createPhotoTabs();
        }
      );
  }

  createPhotoTabs() {
    const length = this.photosList.length;
    for (const photo of this.photosList) {
      const label = photo.label;
      if (this.photoLabels.indexOf(label) === -1) {
        this.photoLabels.push(label);
      }
    }
    console.log(this.photoLabels);
  }

}
