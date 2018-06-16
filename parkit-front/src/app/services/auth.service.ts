import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;

  public logIn(): boolean {
    this.user = new User();
    this.user.id = '9';
    this.user.name = 'Jake';
    this.user.token = 'jio43qtj0843qgh8';
    this.user.parkingSpot = 45;
    this.user.wantsParking = true;
    this.user.employmentDate = new Date();
    return true;
  }
  public logOut() {
    this.user = null;
  }
  public isLoggedIn(): boolean {
    return this.user != null;
  }
  public getUser(): User {
    return this.user;
  }
}
