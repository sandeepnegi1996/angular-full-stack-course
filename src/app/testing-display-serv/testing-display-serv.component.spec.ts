import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingDisplayServComponent } from './testing-display-serv.component';

describe('TestingDisplayServComponent', () => {
  let component: TestingDisplayServComponent;
  let fixture: ComponentFixture<TestingDisplayServComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingDisplayServComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingDisplayServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
