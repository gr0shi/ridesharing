import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ride } from '../../../shared/models/ride.model';
import { RideService } from '../../../shared/services/ride.servide';

@Component({
  selector: 'app-edit-ride',
  templateUrl: './edit-ride.component.html',
  styleUrls: ['./edit-ride.component.scss']
})
export class EditRideComponent implements OnInit {

  @Input() rides: Ride[] = [];
  @Output() onRideEdit = new EventEmitter<Ride>();

  currentRideID = 1;
  currentRide?: Ride;
  data: Ride[] = [];

  constructor(private rideService: RideService) { }

  ngOnInit(): void {
    this.onRideChange();
  }

  onRideChange() {
    this.currentRide = this.rides
      .find(c => c.id === +this.currentRideID);
  }

  onSubmit(f: NgForm) {
    const { name, date, description, price, author } = f.value;
    const ride = new Ride(name, date, description, price, author, +this.currentRideID);
    // this.rideService.updateRide(ride)
    //   .subscribe((data: Ride) => {
    //     this.onRideEdit.emit(data);
    //     alert('Поездка успешно отредактирована');
    //   })//BUG //TODO Сделать редактирование поездок
  }
}
