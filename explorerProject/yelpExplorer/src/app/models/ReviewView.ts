import {Business} from './Business';
import {User} from './User';

export class ReviewView {
  id: string;
  userId: string;
  reviewCount: number;
  yelpingSince: string;
  stars: number;
  // Might need to change the datatype here
  date: string;
  userName: string;
  text: string;
  useful: number;
  funny: number;
  cool: number;

  constructor(id: string, userId: string, reviewCount: number, yelpingSince: string, stars: number,
              date: string, userName: string, text: string, useful: number, funny: number, cool: number) {
    this.id = id;
    this.userId = userId;
    this.reviewCount = reviewCount;
    this.yelpingSince = yelpingSince;
    this.stars = stars;
    this.date = date;
    this.userName = userName;
    this.text = text;
    this.useful = useful;
    this.funny = funny;
    this.cool = cool;
  }
}
