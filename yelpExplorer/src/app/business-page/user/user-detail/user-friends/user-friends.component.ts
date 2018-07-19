import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../user.service';
import {User} from '../../../../models/User';

@Component({
  selector: 'app-user-friends',
  templateUrl: './user-friends.component.html',
  styleUrls: ['./user-friends.component.css']
})
export class UserFriendsComponent implements OnInit {
  @Input() friendUser: User;
  yelpingYear: number;

  constructor() {
  }

  ngOnInit() {
    this.calculateYelpingYear(this.friendUser.yelpingSince);
  }

  calculateYelpingYear(yelpingSince: string) {
    if (yelpingSince) {
      this.yelpingYear = 2018 - (parseInt(yelpingSince, 10));
      return this.yelpingYear;
    }
    return 0;
  }
}
