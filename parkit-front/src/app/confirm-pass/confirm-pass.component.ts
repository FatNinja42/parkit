import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'confirm-pass',
  templateUrl: './confirm-pass.component.html',
  styleUrls: ['./confirm-pass.component.scss']
})
export class ConfirmPassComponent {
  private option: string;

  constructor(private dialogRef: MatDialogRef<ConfirmPassComponent>) {
    this.option = '1';
  }

  changeSelection(event) {
    this.option = event.value;
  }

  pass() {
    const date = new Date();
    if (this.option === '1') {
      date.setDate(date.getDate() + 1);
    }
    console.log(date);
    this.dialogRef.close(date);
  }
}
