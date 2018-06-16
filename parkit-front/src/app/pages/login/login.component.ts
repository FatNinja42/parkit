import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'parking-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  hide = true;
  loginFailed = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  getUsernameError() {
    return this.username.hasError('required') ? 'You must enter a value' : '';
  }

  getPasswordError() {
    return this.username.hasError('required') ? 'You must enter a value' : '';
  }

  login() {
    this.authService.logIn(this.username.value, this.password.value).subscribe(
      () => {
        this.loginFailed = false;
      },
      () => {
        this.loginFailed = true;
      }
    );
  }
}
