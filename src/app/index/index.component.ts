import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  formId = 'app-index-demo-';
  date = '2018/12/25';
  time = '16:45';
  constructor(
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('ngx-date-time-inputs');
  }

}
