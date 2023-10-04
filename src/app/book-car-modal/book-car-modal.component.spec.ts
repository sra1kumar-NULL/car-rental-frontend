import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCarModalComponent } from './book-car-modal.component';

describe('BookCarModalComponent', () => {
  let component: BookCarModalComponent;
  let fixture: ComponentFixture<BookCarModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookCarModalComponent]
    });
    fixture = TestBed.createComponent(BookCarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
