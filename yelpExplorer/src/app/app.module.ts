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
import {UserTipsComponent} from './business-page/user/user-detail/user-tips/user-tips.component';
import {UserFriendsComponent} from './business-page/user/user-detail/user-friends/user-friends.component';
import 'hammerjs';
import 'mousetrap';
import {ModalGalleryModule} from 'angular-modal-gallery';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReviewDialogueComponent } from './business-page/reviews/review-dialogue/review-dialogue.component';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { TipDialogueComponent } from './business-page/tips/tip-dialogue/tip-dialogue.component';
import { LoginComponent } from './login/login.component';
import { PhotosComponent } from './business-page/business-photos/photos.component';


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
    UserTipsComponent,
    UserFriendsComponent,
    ReviewDialogueComponent,
    TipDialogueComponent,
    LoginComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
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
    UserService
  ],
  entryComponents: [
    ReviewDialogueComponent,
    TipDialogueComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
