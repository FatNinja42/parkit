import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ListDataSource } from './list.datasource';
import { UserListElement } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'parking-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ListDataSource;

  displayedColumns = [
    'index',
    'name',
    'parkingSpot',
    'phoneNumber',
    'licensePlates'
  ];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.dataSource = new ListDataSource(this.paginator, this.sort);
  }

  hasNoSpot(user: UserListElement) {
    return user.parkingSpot === 0;
  }

  isCurrentUser(row: UserListElement) {
    return row.id === this.authService.getUser().id;
  }
}
