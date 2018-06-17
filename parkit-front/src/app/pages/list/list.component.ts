import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ListDataSource } from './list.datasource';
import { UserListElement } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

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

  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit() {
    this.dataSource = new ListDataSource(this.http);
  }

  hasNoSpot(user: UserListElement) {
    return !user.parkingSpot;
  }

  isCurrentUser(row: UserListElement) {
    return row.id === this.authService.getUser().id;
  }
}
