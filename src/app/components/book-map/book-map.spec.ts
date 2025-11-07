import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMap } from './book-map';

describe('BookMap', () => {
  let component: BookMap;
  let fixture: ComponentFixture<BookMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
