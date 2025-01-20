import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibarianComponent } from './libarian.component';

describe('LibarianComponent', () => {
  let component: LibarianComponent;
  let fixture: ComponentFixture<LibarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibarianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
