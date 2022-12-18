import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, CanActivateChild } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { SystemComponent } from './system/system.component';
import { PublishRideComponent } from './system/publish-ride/publish-ride.component';
import { HomeComponent } from './system/home/home.component';
import { ProfileComponent } from './system/profile/profile.component';
import { RidesComponent } from './system/rides/rides.component';
import { FindRideComponent } from './system/find-ride/find-ride.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'auth', component: AuthComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent }
    ]
  },
  {
    path: 'system', component: SystemComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'rides', component: RidesComponent },
      { path: 'find', component: FindRideComponent },
      { path: 'publish', component: PublishRideComponent },
    ],
  },
  // { path: '', redirectTo: 'auth', pathMatch: 'full' }
  { path: 'internal-server', component: InternalServerComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
