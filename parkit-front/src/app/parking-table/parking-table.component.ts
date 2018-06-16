import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ParkingTableDataSource } from './parking-table-datasource';
import { UserListElement } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'parking-table',
  templateUrl: './parking-table.component.html',
  styleUrls: ['./parking-table.component.scss']
})
export class ParkingTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ParkingTableDataSource;

  displayedColumns = ['index', 'name', 'parkingSpot'];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.dataSource = new ParkingTableDataSource(this.paginator, this.sort);
    this.authService.logIn();
  }

  hasNoSpot(user: UserListElement) {
    return user.parkingSpot === 0;
  }

  isCurrentUser(row: UserListElement) {
    return row.id === this.authService.getUser().id;
  }
}
