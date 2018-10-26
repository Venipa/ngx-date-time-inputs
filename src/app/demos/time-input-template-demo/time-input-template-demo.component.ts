import { Component } from '@angular/core';

@Component({
  selector: 'app-time-input-template-demo',
  templateUrl: './time-input-template-demo.component.html',
  styleUrls: ['./time-input-template-demo.component.scss']
})
export class TimeInputTemplateDemoComponent {
  formId = 'app-time-input-template-demo-';
  time = '13:30';
}
