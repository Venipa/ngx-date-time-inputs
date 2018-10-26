import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DateInputComponent } from './date-input.component';
import { TimeInputComponent } from './time-input.component';
import { DateService } from './date.service';

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  declarations: [DateInputComponent, TimeInputComponent],
  exports: [DateInputComponent, TimeInputComponent],
  providers: [DateService]
})
export class NgxDateTimeInputsModule { }
