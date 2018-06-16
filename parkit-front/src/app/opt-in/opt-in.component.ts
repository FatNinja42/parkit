import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'opt-in',
  templateUrl: './opt-in.component.html',
  styleUrls: ['./opt-in.component.scss']
})
export class OptInComponent implements OnInit {

  constructor(private authService: AuthService) {}

  user = this.authService.getUser();
  wantsPaking = this.user.wantsParking;

  ngOnInit() {
  }

}
