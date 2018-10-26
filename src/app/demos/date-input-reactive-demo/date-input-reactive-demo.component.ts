import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as momentNs from 'moment';
const moment = momentNs;
@Component({
  selector: 'app-date-input-reactive-demo',
  templateUrl: './date-input-reactive-demo.component.html',
  styleUrls: ['./date-input-reactive-demo.component.scss']
})
export class DateInputReactiveDemoComponent implements OnInit {
  dateControl: FormControl;
  formId = 'app-date-input-reactive-demo-';
  ngOnInit() {
    const today = moment().format('YYYY-MM-DD');
    this.dateControl = new FormControl(today, {validators: [
      (fc: FormControl) => {
        const m = moment(fc.value, 'YYYY-MM-DD');
        // today...
        const min = moment();
        if (min.isAfter(m, 'date')) {
          return {minDate: true};
        }
        return null;
      }
    ]});
  }
}
