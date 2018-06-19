import {Category} from './Category';
import {Attribute} from './Attribute';

export class Business {
  id: string;
  name: string;
  neighborhood: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  stars: number;
  reviewCount: number;
  isOpen: number;
  categories: Category[];
  attributes: Attribute[];

  constructor(id: string, name: string, neighborhood: string, address: string,
              city: string, state: string, postalCode: string, latitude: number,
              longitude: number, stars: number, reviewCount: number, isOpen: number,
              categories: Category[], attributes: Attribute[]) {
    this.id = id;
    this.name = name;
    this.neighborhood = neighborhood;
    this.address = address;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.latitude = latitude;
    this.longitude = longitude;
    this.stars = stars;
    this.reviewCount = reviewCount;
    this.isOpen = isOpen;
    this.categories = categories;
    this.attributes = attributes;
  }
}
