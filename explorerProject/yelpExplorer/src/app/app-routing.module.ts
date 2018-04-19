import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TipsComponent} from './business-page/tips/tips.component';
import {ReviewsComponent} from './business-page/reviews/reviews.component';
import {BusinessComponent} from './business-page/business/business.component';
import {BusinessPageComponent} from './business-page/business-page.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
      path: 'businesses/city/:city/:businessId',
      // businesses/city/ajax/-ldren1EOMh3PkExcpyRoA
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
