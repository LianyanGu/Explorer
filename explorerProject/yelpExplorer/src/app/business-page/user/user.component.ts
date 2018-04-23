import {Component, Input, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {User} from '../../models/User';
import {EliteYear} from '../../models/EliteYear';
import {Friend} from '../../models/Friend';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  eliteYears: EliteYear[];
  @Input() id;
  user: User;
  friends: Friend[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser(this.id)
      .subscribe(
        (response) => {
          this.user = response;
          this.eliteYears = this.user.eliteYears;
        }
      );
    // TODO: GET NUMBER OF FRIENDS BY USERID, BUT THIS PROCESS TAKES SO LONG FOR EACH USER
    // this.userService.getFriendsByUser(this.id)
    //   .subscribe(
    //     (response) => {
    //       console.log(this.friends);
    //       this.friends = response;
    //     }
    //   );
  }

}
