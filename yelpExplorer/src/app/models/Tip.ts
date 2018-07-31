import {User} from './User';
import {Business} from './Business';

export class Tip {
  text: string;
  // Might need to change the datatype here
  date: Date;
  likes: number;
  userId: string;
  businessId: string;


  constructor(text: string, date: Date, likes: number, businessId: string, userId: string) {
    this.text = text;
    this.date = date;
    this.likes = likes;
    this.businessId = businessId;
    this.userId = userId;
  }
}
