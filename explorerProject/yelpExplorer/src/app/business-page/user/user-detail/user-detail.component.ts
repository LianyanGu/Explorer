import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userId: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Yelp uses queryParams here, SHOULD i use queryParams or params??
    // Or should I just pass in the whole user from user component??
    this.route.queryParams
      .subscribe(
        (params: Params) => {
          this.userId = params['userId'];
        }
      );

  }

}
