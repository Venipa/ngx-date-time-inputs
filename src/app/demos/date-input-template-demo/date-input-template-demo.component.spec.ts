import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputTemplateDemoComponent } from './date-input-template-demo.component';

describe('DateInputTemplateDemoComponent', () => {
  let component: DateInputTemplateDemoComponent;
  let fixture: ComponentFixture<DateInputTemplateDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateInputTemplateDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateInputTemplateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
