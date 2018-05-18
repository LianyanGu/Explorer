import {Component, Input, OnInit} from '@angular/core';
import {TipsService} from './tips.service';
import {TipView} from '../../models/TipView';
import {PagerService} from '../../pager.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  @Input() businessId: string;
  tips: TipView[];
  pager: any = {};
  pagedItems: any[];
  newTip: string;

  constructor(private tipsService: TipsService,
              private pagerService: PagerService) {
  }

  ngOnInit() {
    this.tipsService.getTipByBusinessId(this.businessId)
      .subscribe(
        (response) => {
          this.tips = response;
          this.setPage(1);
        }
      );
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.tips.length, page);
    // get current page of items
    this.pagedItems = this.tips.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  addTip() {
    //
  }
}
