import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';

import { SystemComponent } from './system.component';
import { ProfileComponent } from './profile/profile.component';
import { RidesComponent } from './rides/rides.component';
import { FindRideComponent } from './find-ride/find-ride.component';
import { HomeComponent } from './home/home.component';
import { PublishRideComponent } from './publish-ride/publish-ride.component';
import { CreateRideComponent } from './publish-ride/create-ride/create-ride.component';
import { EditRideComponent } from './publish-ride/edit-ride/edit-ride.component';

import { DropdownDirective } from '../shared/directives/dropdown.directive';

import { NewPipe } from '../shared/pipes/new.pipe';
import { RidePipe } from '../shared/pipes/ride.pipe';

@NgModule({
  declarations: [
    SystemComponent,
    ProfileComponent,
    RidesComponent,
    FindRideComponent,
    HomeComponent,
    PublishRideComponent,
    CreateRideComponent,
    EditRideComponent,
    DropdownDirective,
    NewPipe,
    RidePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    SystemRoutingModule
  ],
  providers: [

  ]
})

export class SystemModule {

}