import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputReactiveDemoComponent } from './date-input-reactive-demo.component';

describe('DateInputReactiveDemoComponent', () => {
  let component: DateInputReactiveDemoComponent;
  let fixture: ComponentFixture<DateInputReactiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateInputReactiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateInputReactiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
