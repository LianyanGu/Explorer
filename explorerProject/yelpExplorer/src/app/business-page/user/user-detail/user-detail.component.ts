import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ReviewsService} from '../../reviews/reviews.service';
import {TipsService} from '../../tips/tips.service';
import {ReviewView} from '../../../models/ReviewView';
import {TipView} from '../../../models/TipView';
import {User} from '../../../models/User';
import {UserService} from '../user.service';
import {Business} from '../../../models/Business';
import {BusinessService} from '../../business.service';
import {PagerService} from '../../../pager.service';
import {EliteYear} from '../../../models/EliteYear';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userId: string;
  reviews: ReviewView[];
  tips: TipView[];
  user: User;
  pager: any = {};
  tipPager: any = {};
  pagedItems: any[];
  pagedTips: any[];

  constructor(private route: ActivatedRoute,
              private reviewsService: ReviewsService,
              private tipsService: TipsService,
              private userService: UserService,
              private pagerService: PagerService) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(
        (params: Params) => {
          this.userId = params['userId'];
          this.userService.getUser(this.userId).subscribe(
            (response) => {
              this.user = response;
              console.log(this.user);
            }
          );
        }
      );
    this.getReviewsByUserId(this.userId);
    this.getTipsByUserId(this.userId);
  }

  getReviewsByUserId(userId: string) {
    this.reviewsService.getReviewsByUserId(userId)
      .subscribe(
        (response) => {
          this.reviews = response;
          this.setPage(1);
        }
      );
  }

  getTipsByUserId(userId: string) {
    this.tipsService.getTipsByUserId(userId)
      .subscribe(
        (response) => {
          this.tips = response;
          this.setTipPage(1);
        }
      );
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.pagerService.getPager(this.reviews.length, page);
    this.pagedItems = this.reviews.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  setTipPage(tipPage: number) {
    if (tipPage < 1 || tipPage > this.pager.totalPages) {
      return;
    }
    this.tipPager = this.pagerService.getPager(this.tips.length, tipPage);
    this.pagedTips = this.tips.slice(this.tipPager.startIndex, this.tipPager.endIndex + 1);

  }

}
