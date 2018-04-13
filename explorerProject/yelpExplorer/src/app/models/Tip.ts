import {User} from './User';
import {Business} from './Business';

export class Tip {
  id: string;
  text: string;
  // Might need to change the datatype here
  date: string;
  likes: number;
  user: User;
  business: Business;


  constructor(id: string, text: string, date: string, likes: number, user: User,
              business: Business) {
    this.id = id;
    this.text = text;
    this.date = date;
    this.likes = likes;
    this.user = user;
    this.business = business;
  }
}
