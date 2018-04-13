import {User} from './User';
import {Business} from './Business';

export class Review {
  id: string;
  stars: number;
  // Might need to change the datatype here
  date: string;
  text: string;
  useful: number;
  funny: number;
  cool: number;
  business: Business;
  user: User;


  constructor(id: string, stars: number, date: string, text: string, useful: number, funny: number, cool: number, business: Business, user: User) {
    this.id = id;
    this.stars = stars;
    this.date = date;
    this.text = text;
    this.useful = useful;
    this.funny = funny;
    this.cool = cool;
    this.business = business;
    this.user = user;
  }
}
