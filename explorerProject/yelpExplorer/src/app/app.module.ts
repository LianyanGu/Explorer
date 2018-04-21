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
import {PagerService} from './home/business-summary/pager.service';
import { AttributeComponent } from './business-page/attributes/attribute/attribute.component';
import { UserComponent } from './business-page/user/user.component';
import {UserService} from './business-page/user/user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { AttributesComponent } from './business-page/attributes/attributes.component';

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
    AttributesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
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
  bootstrap: [AppComponent]
})

export class AppModule {
}
