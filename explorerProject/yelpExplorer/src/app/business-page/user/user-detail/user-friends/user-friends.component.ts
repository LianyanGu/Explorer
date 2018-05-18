import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user.service';
import {Friend} from '../../../../models/Friend';

@Component({
  selector: 'app-user-friends',
  templateUrl: './user-friends.component.html',
  styleUrls: ['./user-friends.component.css']
})
export class UserFriendsComponent implements OnInit {

  userId: string;
  friends: Friend[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getFriendsByUser(this.userId)
      .subscribe(
        (response) => {
          this.friends = response;
        }
      );
  }

}
