import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';


import { DateService } from './date.service';
import { AbstractInputComponent } from './abstract-input.component';
import { MODEL_DATE_FORMAT } from './shared';

@Component({
  selector: 'ngx-date-input',
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    }
  ]
})
export class DateInputComponent extends AbstractInputComponent {
  @Input() displayFormat = 'LL';
  @Input() inputPlaceholder = 'Enter a date';
  @Input() inputId: string;
  @Input() inputClass: string;
  constructor(
    ds: DateService,
  ) {
    super(ds);
  }

  writeValue(dateString: string) {
    const d = this.dateService.parseDate(dateString);
    this.date.year(d.year).month(d.month).date(d.date);
    this.control.setValue(this.date.format(this.displayFormat));
  }

  handleInputChange() {
    const d = this.dateService.parseDate(this.control.value);
    this.date.year(d.year).month(d.month).date(d.date);
    const modelValue = this.date.format(MODEL_DATE_FORMAT);
    this.control.setValue(this.date.format(this.displayFormat));
    this.propagateChange(modelValue);
    this.propagateTouched(modelValue);
  }
}
