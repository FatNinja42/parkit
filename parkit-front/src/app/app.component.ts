import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private notificationService: NotificationService
  ) {
    notificationService.makeTee();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
