import {Component, Input, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() id;
  user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser(this.id)
      .subscribe(
        (response) => {
          this.user = response;
        }
      );
  }

}
