import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Settings } from '../config/settings.config';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private settings: Settings;

  constructor(public auth: AuthService) {
    this.settings = new Settings();
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: 'Basic ' + this.auth.getToken()
      },
      url: this.settings.apiUrl + request.url
    });

    return next.handle(request);
  }
}
