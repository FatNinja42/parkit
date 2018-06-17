import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material';
import { ConfirmPassComponent } from '../../confirm-pass/confirm-pass.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'parking-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public parkingSpot: number;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private http: HttpClient
  ) {
    this.parkingSpot = authService.getUser().parkingSpot;
  }

  pass() {
    const dialogRef = this.dialog.open(ConfirmPassComponent, {
      height: 'min(50%, 500px)',
      width: 'min(90%, 500px)'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.http
        .post('passDay', {
          id: this.authService.getUser().id,
          passDayDate: result
        })
        .subscribe(r => console.log(r));
    });
  }
}
