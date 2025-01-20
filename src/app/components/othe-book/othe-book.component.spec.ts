import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtheBookComponent } from './othe-book.component';

describe('OtheBookComponent', () => {
  let component: OtheBookComponent;
  let fixture: ComponentFixture<OtheBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtheBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtheBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
