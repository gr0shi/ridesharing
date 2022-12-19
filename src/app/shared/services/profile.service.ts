import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { Profile } from '../models/profile.model';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) { }

}

export { Profile };
