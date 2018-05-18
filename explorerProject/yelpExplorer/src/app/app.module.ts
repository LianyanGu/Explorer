import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import {BusinessPageComponent} from './business-page/business-page.component';
import {AppRoutingModule} from './app-routing.module';
import {ReviewsComponent} from './business-page/reviews/reviews.component';
import {TipsComponent} from './business-page/tips/tips.component';
import {ReviewComponent} from './business-page/reviews/review/review.component';
import {TipComponent} from './business-page/tips/tip/tip.component';
import {BusinessComponent} from './business-page/business/business.component';
import {ReviewsService} from './business-page/reviews/reviews.service';
import {TipsService} from './business-page/tips/tips.service';
import {BusinessService} from './business-page/business.service';
import {BusinessSummaryComponent} from './home/business-summary/business-summary.component';
import {PagerService} from './pager.service';
import {AttributeComponent} from './business-page/attributes/attribute/attribute.component';
import {UserComponent} from './business-page/user/user.component';
import {UserService} from './business-page/user/user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {AttributesComponent} from './business-page/attributes/attributes.component';
import {UserDetailComponent} from './business-page/user/user-detail/user-detail.component';
import {UserReviewsComponent} from './business-page/user/user-detail/user-reviews/user-reviews.component';
import {UserBusinessSummaryComponent} from './business-page/user/user-detail/user-business-summary/user-business-summary.component';
import {UserTipsComponent} from './business-page/user/user-detail/user-tips/user-tips.component';
import {UserFriendsComponent} from './business-page/user/user-detail/user-friends/user-friends.component';
import {PhotoComponent} from './business-page/photo/photo.component';
import {PhotoService} from './business-page/photo/photo.service';
import 'hammerjs';
import 'mousetrap';
import { ModalGalleryModule } from 'angular-modal-gallery';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusinessPageComponent,
    ReviewsComponent,
    TipsComponent,
    ReviewComponent,
    TipComponent,
    BusinessComponent,
    BusinessSummaryComponent,
    AttributeComponent,
    UserComponent,
    AttributesComponent,
    UserDetailComponent,
    UserReviewsComponent,
    UserBusinessSummaryComponent,
    UserTipsComponent,
    UserFriendsComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    ModalGalleryModule.forRoot()
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    BusinessService,
    PagerService,
    ReviewsService,
    TipsService,
    UserService,
    PhotoService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
