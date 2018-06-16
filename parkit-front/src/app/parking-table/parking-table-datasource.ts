import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { UserListElement } from '../models/user.model';

const EXAMPLE_DATA: UserListElement[] = [
  { id: '1', name: 'Mike', parkingSpot: 6736 },
  { id: '2', name: 'Bob', parkingSpot: 7257 },
  { id: '3', name: 'Hans', parkingSpot: 0 },
  { id: '4', name: 'Berry', parkingSpot: 0 },
  { id: '5', name: 'Chuck', parkingSpot: 0 },
  { id: '6', name: 'Ed', parkingSpot: 5654 },
  { id: '7', name: 'Otto', parkingSpot: 3435 },
  { id: '8', name: 'Eduard', parkingSpot: 0 },
  { id: '9', name: 'Hansel', parkingSpot: 0 },
  { id: '10', name: 'Marco', parkingSpot: 0 },
  { id: '11', name: 'Ludvig', parkingSpot: 0 }
];

export class ParkingTableDataSource extends DataSource<UserListElement> {
  data: UserListElement[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  connect(): Observable<UserListElement[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    this.paginator.length = this.data.length;
    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.data]));
      })
    );
  }

  disconnect() {}

  private getPagedData(data: UserListElement[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: UserListElement[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
