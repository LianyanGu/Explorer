export class ReviewView {
  id: string;
  businessId: string;
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

  constructor(businessId: string, userId: string, stars: number, date: string, text: string,
              useful: number, funny: number, cool: number, userName: string,
              reviewCount: number, yelpingSince: string) {
    this.businessId = businessId;
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
