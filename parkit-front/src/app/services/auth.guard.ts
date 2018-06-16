import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate() {
    console.log('AlwaysAuthGuard');
    return this.authService.isLoggedIn();
  }
}
