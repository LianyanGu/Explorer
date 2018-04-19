import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Business} from '../../models/Business';
import {BusinessService} from '../business.service';
import {Attribute} from '../../models/Attribute';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  @Input() business: Business;
  isOpen: string;

  // businessId = this.route.snapshot.params['businessId'];

  constructor(private businessService: BusinessService) {
  }

  ngOnInit() {
    this.isOpen = this.business.isOpen === 1 ? 'Business is open' : 'Business is not open';
  }



}
