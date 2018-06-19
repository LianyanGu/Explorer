import {User} from './User';
import {Business} from './Business';

export class Review {
  businessId: string;
  id: string;
  stars: number;
  // Might need to change the datatype here
  date: string;
  text: string;
  useful: number;
  funny: number;
  cool: number;


  constructor(businessId: string, stars: number, date: string, text: string, useful: number, funny: number, cool: number) {
    this.businessId = businessId;
    this.stars = stars;
    this.date = date;
    this.text = text;
    this.useful = useful;
    this.funny = funny;
    this.cool = cool;
  }
}
