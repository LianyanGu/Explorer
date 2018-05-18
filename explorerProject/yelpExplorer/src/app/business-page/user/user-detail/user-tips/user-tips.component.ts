import {Component, Input, OnInit} from '@angular/core';
import {TipView} from '../../../../models/TipView';

@Component({
  selector: 'app-user-tips',
  templateUrl: './user-tips.component.html',
  styleUrls: ['./user-tips.component.css']
})
export class UserTipsComponent implements OnInit {
  @Input() tip: TipView;

  constructor() {
  }

  ngOnInit() {
  }

}
