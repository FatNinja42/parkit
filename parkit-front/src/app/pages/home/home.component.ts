import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material';
import { ConfirmPassComponent } from '../../confirm-pass/confirm-pass.component';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'parking-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public parkingSpot: number;
  public wantsParking: boolean;
  public canPass: boolean;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private http: HttpClient
  ) {
    this.wantsParking = authService.getUser().wantsParking;
    this.parkingSpot = authService.getUser().parkingSpot;
    this.canPass = <boolean>(
      (!authService.getUser().passDay &&
        authService.getUser().parkingSpot !== 0)
    );
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
          passDayDate: this.format(result)
        })
        .subscribe(() => {
          this.canPass = true;
          this.authService.updateUser();
        });
    });
  }

  format(date: Date) {
    const pipe = new DatePipe('en-US');
    return pipe.transform(date, 'd/M/yy');
  }
}
