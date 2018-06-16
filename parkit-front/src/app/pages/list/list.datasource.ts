import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { UserListElement } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';

export class ListDataSource extends DataSource<UserListElement> {
  constructor(private http: HttpClient) {
    super();
  }

  connect(): Observable<UserListElement[]> {
    return this.http.get<UserListElement[]>('userList').pipe(
      map(list => {
        console.log(list);
        return list;
      })
    );
  }

  disconnect() {}
}
