import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardvComponent } from './cardv.component';

describe('CardvComponent', () => {
  let component: CardvComponent;
  let fixture: ComponentFixture<CardvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
