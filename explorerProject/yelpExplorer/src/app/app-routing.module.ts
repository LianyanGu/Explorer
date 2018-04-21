import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TipsComponent} from './business-page/tips/tips.component';
import {ReviewsComponent} from './business-page/reviews/reviews.component';
import {BusinessComponent} from './business-page/business/business.component';
import {BusinessPageComponent} from './business-page/business-page.component';

const appRoutes: Routes = [
    {
      path: 'businesses/city',
      component: HomeComponent
    },
    {
      path: 'businesses/:businessId',
      component: BusinessPageComponent,
      children: [
        {path: 'reviews', component: ReviewsComponent},
        {path: 'tips', component: TipsComponent},
        {path: '', component: BusinessComponent}
      ]
    },
  ]
;

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
