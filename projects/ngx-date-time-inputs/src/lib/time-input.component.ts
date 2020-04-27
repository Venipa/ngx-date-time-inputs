import { Component, Input, forwardRef, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';


import { DateService } from './date.service';
import { MODEL_TIME_FORMAT } from './shared';
import { AbstractInputComponent } from './abstract-input.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'ngx-time-input',
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimeInputComponent),
      multi: true
    }
  ]
})
export class TimeInputComponent extends AbstractInputComponent implements OnDestroy {
  destroy$ = new Subject<void>();

  @Input() displayFormat: any = 'LT';
  @Input() inputPlaceholder = 'Enter a time';
  @Input() inputId: string;
  @Input() inputClass: string;

  constructor(
    ds: DateService,
  ) {
    super(ds);
    if (this.displayFormat === false) {
      this.displayFormat = ds.defaultDateFormat;
      ds.defaultDateFormat$.pipe(takeUntil(this.destroy$)).subscribe(x => {
        this.handleInputChange();
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next(),
    this.destroy$.complete();
  }

  writeValue(timeString: string) {
    const t = this.dateService.parseTime(timeString);
    this.date.hour(t.hour).minute(t.minute);
    this.control.setValue(this.date.format(this.displayFormat));
  }

  handleInputChange() {
    const t = this.dateService.parseTime(this.control.value);
    this.date.hour(t.hour).minute(t.minute);
    const modelValue = this.date.format(MODEL_TIME_FORMAT);
    this.control.setValue(this.date.format(this.displayFormat));
    this.propagateChange(modelValue);
    this.propagateTouched(modelValue);
  }


}
