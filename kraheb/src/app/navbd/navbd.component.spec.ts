import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbdComponent } from './navbd.component';

describe('NavbdComponent', () => {
  let component: NavbdComponent;
  let fixture: ComponentFixture<NavbdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
