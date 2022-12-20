import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './system.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RidesComponent } from './rides/rides.component';
import { FindRideComponent } from './find-ride/find-ride.component';
import { PublishRideComponent } from './publish-ride/publish-ride.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: 'system', component: SystemComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'editprofile', component: EditProfileComponent },
      { path: 'rides', component: RidesComponent },
      { path: 'find', component: FindRideComponent },
      { path: 'publish', component: PublishRideComponent },
    ],
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule { }