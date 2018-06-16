import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  private token: string;

  constructor(private http: HttpClient) {}

  public logIn(username: string, password: string): Observable<boolean> {
    this.token = btoa(username + ':' + password);
    return this.http.get<User>('user').pipe(
      map(response => {
        this.user = response;
        return true;
      })
    );
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
  public getToken(): string {
    return this.token;
  }
}
