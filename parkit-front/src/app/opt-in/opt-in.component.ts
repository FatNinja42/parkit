import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'opt-in',
  templateUrl: './opt-in.component.html',
  styleUrls: ['./opt-in.component.scss']
})
export class OptInComponent implements OnInit {

  constructor(private authService: AuthService, private http: HttpClient) {}

  user = this.authService.getUser();
  wantsPaking = this.user.wantsParking;

  ngOnInit() {
  }

  public onChange(event) {
    if (event.checked !== true) {
      this.http.post('giveUpParking', this.user.id).subscribe(response =>
        this.authService.updateUser()
      );
    } else {
      this.http.post('requestParking', this.user.id).subscribe(response =>
      this.authService.updateUser());
    }
  }
}
