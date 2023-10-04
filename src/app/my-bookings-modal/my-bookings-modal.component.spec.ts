import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookingsModalComponent } from './my-bookings-modal.component';

describe('MyBookingsModalComponent', () => {
  let component: MyBookingsModalComponent;
  let fixture: ComponentFixture<MyBookingsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyBookingsModalComponent]
    });
    fixture = TestBed.createComponent(MyBookingsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
