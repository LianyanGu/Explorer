import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TipsComponent} from './business-page/tips/tips.component';
import {ReviewsComponent} from './business-page/reviews/reviews.component';
import {BusinessComponent} from './business-page/business/business.component';
import {BusinessPageComponent} from './business-page/business-page.component';
import {UserDetailComponent} from './business-page/user/user-detail/user-detail.component';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
    {
      path: 'login',
      component: LoginComponent
    },
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
    {
      path: 'user-details',
      component: UserDetailComponent
    }
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
