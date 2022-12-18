import { Component, OnInit } from '@angular/core';

import { Ride } from 'src/app/shared/models/ride.model';
import { RideService } from 'src/app/shared/services/ride.servide';

@Component({
  selector: 'app-publish-ride',
  templateUrl: './publish-ride.component.html',
  styleUrls: ['./publish-ride.component.scss']
})
export class PublishRideComponent implements OnInit {

  rides: Ride[] = [];
  isLoaded = false;
  constructor(private rideService: RideService) { }

  ngOnInit(): void {
    this.rideService.getRides()
      .subscribe((rides: Ride[]) => {
        this.rides = rides;
        this.isLoaded = true;
      });
  }

  newRideAdded(ride: Ride) {
    this.rides.push(ride);
  }

  rideWasEdited(ride: Ride) {
    const idx = this.rides
      .findIndex(c => c.id === ride.id);
    this.rides[idx] = ride;
  }
}
