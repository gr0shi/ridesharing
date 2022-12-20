import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user?: User;

  ngOnInit(): void {
    this.user = JSON.parse(window.localStorage.getItem('user')!);
  }
}
