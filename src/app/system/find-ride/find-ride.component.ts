import { Component, OnInit } from '@angular/core';
import { Ride } from '../../shared/models/ride.model';
import { RideService } from 'src/app/shared/services/ride.servide';

@Component({
  selector: 'app-find-ride',
  templateUrl: './find-ride.component.html',
  styleUrls: ['./find-ride.component.scss']
})
export class FindRideComponent implements OnInit {

  rides: Ride[] = [];
  searchValue: string = "";
  searchPlaceholder: string = "Поиск по маршруту";
  searchField: string = "name";

  constructor(private rideService: RideService) { }

  ngOnInit() {
    this.rideService.getRides()
      .subscribe((rides: Ride[]) => {
        this.rides = rides;
      })
  }

  changeCriteria(field: string) {
    const nameMap: any = {
      name: 'Поиск по маршруту',
      date: 'Поиск по дате',
      price: 'Поиск по цене',
    };
    this.searchPlaceholder = nameMap[field];
    this.searchField = field;
  }

  myRide(ride: string) {

  }
}
