import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { User } from '../../shared/models/user.model';
import { AuthService } from '../../shared/services/auth.service';
import { RideService } from '../../shared/services/ride.servide';
import { Ride } from '../../shared/models/ride.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user?: User;

  // pipes test
  newDate = new Date(2002, 0o5, 0o7);
  message: string = "Строка для теста";
  a: number = 22.13;
  // pipes test

  rides: Ride[] = [];
  searchValue: string = "";
  searchPlaceholder: string = "Название";
  searchField: string = "name";

  constructor(
    private authService: AuthService,
    private router: Router,
    private rideService: RideService) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user')!);
    this.rideService.getRides()
      .subscribe((rides: Ride[]) => {
        this.rides = rides;
      })
  }

  changeCriteria(field: string) {
    const nameMap: any = {
      name: 'Название',
      date: 'Дата',
      id: 'Номер'
    };
    this.searchPlaceholder = nameMap[field];
    this.searchField = field;
  }
}
