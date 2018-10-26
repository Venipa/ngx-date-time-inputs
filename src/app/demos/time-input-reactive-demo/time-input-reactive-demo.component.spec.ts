import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeInputReactiveDemoComponent } from './time-input-reactive-demo.component';

describe('TimeInputReactiveDemoComponent', () => {
  let component: TimeInputReactiveDemoComponent;
  let fixture: ComponentFixture<TimeInputReactiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeInputReactiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeInputReactiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
