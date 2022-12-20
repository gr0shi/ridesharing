import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { Ride } from '../models/ride.model';

@Injectable()
export class RideService {
  constructor(private http: HttpClient) { }

  createRide(ride: Ride) {
    return this.http.post('http://localhost:3000/rides', ride)
  }

  getRides(): Observable<any> {
    return this.http.get('http://localhost:3000/rides');
  }

  updateRide(ride: Ride) {
    return this.http.put('http://localhost:3000/rides/${data.id}', ride);
  }//TODO Сделать редактирование поездок
}