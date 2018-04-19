import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onLoadReviews() {
    this.router.navigate(['business/reviews']);
    // Below will be business/tips/reviews
    // this.router.navigate(['reviews'], {relativeTo: this.route});
  }


  // getTipByBusinessId(businessId: string) {
  //   this.tipsService.getTipByBusinessId(businessId)
  //     .subscribe(
  //       (response) => {
  //         this.tips = response;
  //         this.tipLoaded = true;
  //         console.log(response);
  //       },
  //       (error) => console.log(error)
  //     );
  // }

}
