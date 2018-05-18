import {Component, Input, OnInit} from '@angular/core';
import {BusinessService} from '../business.service';
import {Photo} from '../../models/Photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input() photo: Photo;
  constructor(private businessService: BusinessService) {
  }

  ngOnInit() {

  }

}
