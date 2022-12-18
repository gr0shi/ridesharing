import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SystemModule } from './system/system.module';

import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { RideService } from './shared/services/ride.servide';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';

import { AuthGuard } from './shared/guards/auth.guard';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainPageComponent,
    InternalServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SystemModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    AuthService,
    RideService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
