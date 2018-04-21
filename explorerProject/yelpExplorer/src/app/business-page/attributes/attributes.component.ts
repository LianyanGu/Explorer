import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {

  @Input() attributes;

  constructor() {
  }

  ngOnInit() {
  }

}
