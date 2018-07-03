import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';


  city: string;
  businessName: string;

  constructor() {
  }


  ngOnInit() {
  }

}
