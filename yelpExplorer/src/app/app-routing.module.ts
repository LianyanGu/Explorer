import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BusinessComponent} from './business-page/business/business.component';
import {BusinessPageComponent} from './business-page/business-page.component';
import {UserDetailComponent} from './business-page/user/user-detail/user-detail.component';
import {LoginComponent} from './login/login.component';
import {PhotosComponent} from './business-page/business-photos/photos.component';

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
        {path: 'photos', component: PhotosComponent},
        {path: '', component: BusinessComponent}
      ]
    },
    {
      path: 'user-details',
      component: UserDetailComponent
    },
    // {
    //   path: 'business-photos/:businessId',
    //   component: PhotosComponent
    // },
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
