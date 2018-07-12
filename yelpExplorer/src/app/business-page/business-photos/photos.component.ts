import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../../models/Photo';
import {AdvancedLayout, GridLayout, Image, PlainGalleryConfig, PlainGalleryStrategy} from '@ks89/angular-modal-gallery';
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
  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({width: '300px', height: 'auto'}, {length: 5, wrap: true})
  };
  categorizedPhotoLists: Photo[][] = [];

  constructor(private businessService: BusinessService) {
  }

  ngOnInit() {
    this.loadPhotoList();
    this.customPlainGalleryRowConfig = {
      strategy: PlainGalleryStrategy.CUSTOM,
      layout: new AdvancedLayout(-1, true)
    };
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
          this.categorizeImages();
        }
      );
  }

  categorizeImages() {
    for (const label of this.photoLabels) {
      const photoLists = this.photosList.filter((photo) => photo.label === label);
      this.categorizedPhotoLists.push(photoLists);
    }
  }

  convertPhotoToImages(photos: Photo[]) {
    return this.createImages(photos);
  }

  createPhotoTabs() {
    for (const photo of this.photosList) {
      const label = photo.label;
      if (this.photoLabels.indexOf(label) === -1) {
        this.photoLabels.push(label);
      }
    }
  }


}
