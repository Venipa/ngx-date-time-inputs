import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-time-input-reactive-demo',
  templateUrl: './time-input-reactive-demo.component.html',
  styleUrls: ['./time-input-reactive-demo.component.scss']
})
export class TimeInputReactiveDemoComponent {
  timeControl: FormControl = new FormControl('09:30');
  formId = 'app-time-input-reactive-demo-';
}
