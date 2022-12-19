import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/shared/models/profile.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user?: User;
  profile?: Profile;

  ngOnInit(): void {
    this.user = JSON.parse(window.localStorage.getItem('user')!);
    this.profile = JSON.parse(window.localStorage.getItem('profile')!);
  }
}
