import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'src/app/shared/models/message.model';
import { Ride } from 'src/app/shared/models/ride.model';
import { RideService } from 'src/app/shared/services/ride.servide';

@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.component.html',
  styleUrls: ['./create-ride.component.scss']
})
export class CreateRideComponent implements OnInit {

  message!: Message;

  @Output() onRideAdd = new EventEmitter<Ride>();

  constructor(private rideService: RideService) { }

  ngOnInit(): void {
    this.message = new Message('success', '');
  }

  private showMassage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = "21212";
    }, 5000);
  }

  onSubmit(f: NgForm) {
    const { name, date, description } = f.value;
    const ride = new Ride(name, date, description);
    console.log(ride);

    this.rideService.createRide(ride)
      .subscribe(() => {
        this.showMassage({
          text: 'Новый пост создан',
          type: 'success'
        })
        f.reset();
        this.onRideAdd.emit(ride);
      })
  }
}
