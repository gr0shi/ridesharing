import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ride } from 'src/app/shared/models/ride.model';
import { RideService } from 'src/app/shared/services/ride.servide';

@Component({
  selector: 'app-delete-ride',
  templateUrl: './delete-ride.component.html',
  styleUrls: ['./delete-ride.component.scss']
})
export class DeleteRideComponent implements OnInit {
  rides: Ride[] = [];
  searchValue: string = "";
  searchPlaceholder: string = "Поиск по маршруту";
  searchField: string = "name";

  constructor(private rideService: RideService,
    private http: HttpClient) { }

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

  onDeleteRide(id: string) {
    this.http.delete('http://localhost:3000/rides/' + id)
      .subscribe();
  }
}

