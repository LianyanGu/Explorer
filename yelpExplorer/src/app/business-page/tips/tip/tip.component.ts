import {Component, Input, OnInit} from '@angular/core';
import {Tip} from '../../../models/Tip';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {

  @Input() tip: Tip;

  constructor() {
  }

  ngOnInit() {
  }

}
