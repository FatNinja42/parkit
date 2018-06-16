import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SELECT_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_control_value_accessor';

@Component({
  selector: 'parking-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  constructor(private authService: AuthService) {}

  ngOnInit() {}
  getErrorMessage() {
    return this.username.hasError('required') ? 'You must enter a value' : '';
  }

  login() {
    this.authService
      .logIn(this.username.value, this.password.value)
      .subscribe(response => {}, error => {});
  }
}
