import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment24Component } from './assignment24.component';

describe('Assignment24Component', () => {
  let component: Assignment24Component;
  let fixture: ComponentFixture<Assignment24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
