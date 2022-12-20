import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ErrorHandlerService } from './error-handler.service'
import { catchError, map, retry } from 'rxjs/operators';

import { User } from '../models/user.model';

@Injectable()
export class UserService {
	constructor(private http: HttpClient) { }

	getUsers(email: string): Observable<User> {
		return this.http.get(`http://localhost:3000/users?email=${email}`)
			.pipe(map((user: any) => user[0] ? user[0] : undefined));
	}

	createUser(user: User) {
		return this.http.post('http://localhost:3000/users', user)
	}

	updateUser(user: User) {
		return this.http.put('http://localhost:3000/users/${data.id}', user);
	}

	deleteUser(user: User) {
		// return this.http.delete('http://localhost:3000/ride/${data.id}', user);
	} //TODO Сделать удаление пользователя
}

export { User };
