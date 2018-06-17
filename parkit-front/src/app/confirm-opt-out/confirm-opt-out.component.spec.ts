import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmOptOutComponent } from './confirm-opt-out.component';

describe('ConfirmOptOutComponent', () => {
  let component: ConfirmOptOutComponent;
  let fixture: ComponentFixture<ConfirmOptOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmOptOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmOptOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
