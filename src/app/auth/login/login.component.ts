import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Message } from '../../shared/models/message.model'
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { ErrorHandlerService } from '../../shared/services/error-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  message!: Message;
  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.message = new Message('danger', 'str')

    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['canLogin']) {
          this.showMessage({
            text: 'Теперь вы можете войти',
            type: 'success'
          });
        } else if (params['deleteUser']) {
          this.showMessage({
            text: 'Ваш аккаунт успешно удалён',
            type: 'success'
          });
        } else if (params['accessDenied']) {
          this.showMessage({
            text: 'Авторизуйтесь чтобы попасть в систему',
            type: 'warning'
          });
        }
      });

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  showMessage(message: Message) {
    this.message = message;
    if (message.type == 'success') {
      alert(message.text);
    } else if (message.type == 'warning') {
      alert(message.text);
    } else {
      alert(message.text);
    }
  }

  onSubmit() {
    const formData = this.form.value;
    console.log(this.form);

    this.userService.getUsers(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            this.showMessage({
              text: 'Вы авторизованы',
              type: 'success'
            })
            this.router.navigate(['/system', 'home']);
          } else {
            this.showMessage({
              text: 'Пароль неверный',
              type: 'warning'
            })
          }
        } else {
          this.showMessage({
            text: 'Такого пользователя не существует',
            type: 'danger'
          })
        }
      });
  }
}