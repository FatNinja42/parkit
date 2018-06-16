import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'parking-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(private authService: AuthService) {}

  user = this.authService.getUser();

}
