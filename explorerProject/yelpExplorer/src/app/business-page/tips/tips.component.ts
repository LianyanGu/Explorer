import {Component, Input, OnInit} from '@angular/core';
import {TipsService} from './tips.service';
import {TipView} from '../../models/TipView';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  @Input() businessId: string;
  tips: TipView[];

  constructor(private tipsService: TipsService) {}

  ngOnInit() {
    this.tipsService.getTipByBusinessId(this.businessId)
      .subscribe(
        (response) => {
          this.tips = response;
        }
      );
  }
}
