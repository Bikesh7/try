import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookolineComponent } from './bookoline.component';

describe('BookolineComponent', () => {
  let component: BookolineComponent;
  let fixture: ComponentFixture<BookolineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookolineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookolineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
