
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingTableComponent } from './parking-table.component';

describe('ParkingTableComponent', () => {
  let component: ParkingTableComponent;
  let fixture: ComponentFixture<ParkingTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});