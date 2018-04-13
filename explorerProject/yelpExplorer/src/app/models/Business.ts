import {Tip} from './Tip';
import {ReviewView} from './ReviewView';

export class Business {
  id: string;
  name: string;
  neighborhood: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  latitude: 'float';
  stars: 'float';
  reviewCount: number;
  isOpen: number;
  tips: Tip[];
  reviewViews: ReviewView[];

  constructor(id: string, name: string, neighborhood: string, address: string, city: string,
              state: string, postalCode: string, latitude, stars, reviewCount: number,
              isOpen: number, tips: Tip[], reviewViews: ReviewView[]) {
    this.id = id;
    this.name = name;
    this.neighborhood = neighborhood;
    this.address = address;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.latitude = latitude;
    this.stars = stars;
    this.reviewCount = reviewCount;
    this.isOpen = isOpen;
    this.tips = tips;
    this.reviewViews = reviewViews;
  }
}
