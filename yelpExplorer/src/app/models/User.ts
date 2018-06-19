import {Tip} from './Tip';
import {EliteYear} from './EliteYear';

export class User {
  id: string;
  userName: string;
  yelpingSince: string;
  // Might need to change the datatype here
  averageStars: 'float';
  reviewCount: number;
  useful: number;
  funny: number;
  cool: number;
  fans: number;
  complimentHot: number;
  complimentMore: number;
  complimentProfile: number;
  complimentNote: number;
  complimentPlain: number;
  complimentCool: number;
  complimentFunny: number;
  complimentWriter: number;
  complimentPhotos: number;
  complimentCute: number;
  complimentList: number;
  tips: Tip[];
  eliteYears: EliteYear[];


  constructor(id: string, userName: string, yelpingSince: string, averageStars, reviewCount: number,
              useful: number, funny: number, cool: number, fans: number, complimentHot: number,
              complimentMore: number, complimentProfile: number, complimentNote: number,
              complimentPlain: number, complimentCool: number, complimentFunny: number,
              complimentWriter: number, complimentPhotos: number, complimentCute: number,
              complimentList: number, tips: Tip[], eliteYears: EliteYear[]) {
    this.id = id;
    this.userName = userName;
    this.yelpingSince = yelpingSince;
    this.averageStars = averageStars;
    this.reviewCount = reviewCount;
    this.useful = useful;
    this.funny = funny;
    this.cool = cool;
    this.fans = fans;
    this.complimentHot = complimentHot;
    this.complimentMore = complimentMore;
    this.complimentProfile = complimentProfile;
    this.complimentNote = complimentNote;
    this.complimentPlain = complimentPlain;
    this.complimentCool = complimentCool;
    this.complimentFunny = complimentFunny;
    this.complimentWriter = complimentWriter;
    this.complimentPhotos = complimentPhotos;
    this.complimentCute = complimentCute;
    this.complimentList = complimentList;
    this.tips = tips;
    this.eliteYears = eliteYears;
  }
}
