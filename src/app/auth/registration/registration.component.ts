import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Message } from '../../shared/models/message.model'
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]), // TODO: ПРОВЕРКА ПОЧТЫ НА НАЛИЧИЕ ВНУТРИ БАЗЫ ДАННЫХ
      'nickname': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])

      //'secondPassword': new FormControl(null, [Validators.required]) // TODO: ПРОВЕРКА ПАРОЛЯ НА СОВПАДЕНИЕ
    });
  }

  onSubmit() {
    const { email, nickname, password } = this.form.value;
    const user = new User(email, nickname, password);
    this.userService.createUser(user)
      .subscribe(() => {
        this.router.navigate(['/auth', 'login'], {
          queryParams: {
            canLogin: true
          }
        });
      });
  }
}
