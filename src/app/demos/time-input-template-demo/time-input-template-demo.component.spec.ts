import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeInputTemplateDemoComponent } from './time-input-template-demo.component';

describe('TimeInputTemplateDemoComponent', () => {
  let component: TimeInputTemplateDemoComponent;
  let fixture: ComponentFixture<TimeInputTemplateDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeInputTemplateDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeInputTemplateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
