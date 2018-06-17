import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  private token: string;

  constructor(private http: HttpClient, private router: Router) {
    const user = JSON.parse(window.sessionStorage.getItem('user'));
    const token = window.sessionStorage.getItem('token');
    if (user && token) {
      this.token = token;
      this.user = user;
      this.makeLoginCall();
    }
  }

  private makeLoginCall() {
    return this.http.get<User>('user').pipe(
      map(response => {
        this.user = new User(response);
        window.sessionStorage.setItem('user', JSON.stringify(this.user));
        window.sessionStorage.setItem('token', this.token);
        this.router.navigate(['']);
        return true;
      })
    );
  }

  public logIn(username: string, password: string): Observable<boolean> {
    this.token = btoa(username + ':' + password);
    return this.makeLoginCall();
  }
  public logOut() {
    this.token = null;
    this.user = null;
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
  }
  public isLoggedIn(): boolean {
    return this.user != null;
  }
  public getUser(): User {
    return this.user;
  }
  public getToken(): string {
    return this.token;
  }

  public updateUser() {
    this.http.get<User>('user').pipe(
      map(response => {
        this.user = new User(response);
        window.sessionStorage.setItem('user', JSON.stringify(this.user));
      })).subscribe();
  }
}
