export class TipView {
  id: string;
  userId: string;
  businessId: string;
  userName: string;
  stars: number;
  date: string;
  text: string;
  likes: number;
  reviewCount: number;
  yelpingSince: string;


  constructor(id: string, userId: string, businessId: string, userName: string, stars: number,
              date: string, text: string, likes: number, reviewCount: number, yelpingSince: string) {
    this.id = id;
    this.userId = userId;
    this.businessId = businessId;
    this.userName = userName;
    this.stars = stars;
    this.date = date;
    this.text = text;
    this.likes = likes;
    this.reviewCount = reviewCount;
    this.yelpingSince = yelpingSince;
  }
}
