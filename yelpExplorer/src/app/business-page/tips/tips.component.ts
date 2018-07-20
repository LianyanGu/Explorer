import {Component, Input, OnInit} from '@angular/core';
import {TipsService} from './tips.service';
import {TipView} from '../../models/TipView';
import {PagerService} from '../../pager.service';
import {MatDialog} from '@angular/material';
import {ReviewDialogueComponent} from '../reviews/review-dialogue/review-dialogue.component';
import {TipDialogueComponent} from './tip-dialogue/tip-dialogue.component';
import {Business} from '../../models/Business';
import {BusinessService} from '../business.service';

export interface DialogData {
  text: string;
  businessName: string;
}

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
  text: string;
  businessName: string;
  searchKeyword: string;

  constructor(private tipsService: TipsService,
              private pagerService: PagerService,
              private businessService: BusinessService,
              public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TipDialogueComponent, {
      width: '700px',
      data: {text: this.text}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.text = result;
    });
  }

  ngOnInit() {
    this.tipsService.getTipByBusinessId(this.businessId)
      .subscribe(
        (response) => {
          this.tips = response;
          this.setPage(1);
        }
      );
    this.getBusinessName(this.businessId);
  }

  getBusinessName(businessId: string) {
    this.businessService.getSelectedBusiness(businessId).subscribe(
      (selectedBusiness: Business) => {
        this.businessName = selectedBusiness.name;
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

  filterTips(searchKeyword: string) {
    console.log(searchKeyword);
  }

  addTip() {
    //
  }
}
