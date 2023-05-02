import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex01NgClassComponent } from './ex01-ng-class.component';

describe('Ex01NgClassComponent', () => {
  let component: Ex01NgClassComponent;
  let fixture: ComponentFixture<Ex01NgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex01NgClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex01NgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
