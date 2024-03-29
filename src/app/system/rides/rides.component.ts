import { Component } from '@angular/core';
import { Ride } from '../../shared/models/ride.model';
import { RideService } from 'src/app/shared/services/ride.servide';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss']
})
export class RidesComponent {

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
