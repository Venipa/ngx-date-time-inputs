import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { TimeInputComponent } from './time-input/time-input.component';
import { DateInputComponent } from './date-input/date-input.component';
import { DateInputTemplateDemoComponent } from './demos/date-input-template-demo/date-input-template-demo.component';
import { DateInputReactiveDemoComponent } from './demos/date-input-reactive-demo/date-input-reactive-demo.component';
import { TimeInputReactiveDemoComponent } from './demos/time-input-reactive-demo/time-input-reactive-demo.component';
import { TimeInputTemplateDemoComponent } from './demos/time-input-template-demo/time-input-template-demo.component';
import { NgxDateTimeInputsModule } from 'projects/ngx-date-time-inputs/src/public_api';

const routes: Routes = [
  {path: 'date-input', component: DateInputComponent},
  {path: 'time-input', component: TimeInputComponent},
  {path: '', component: IndexComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DateInputComponent,
    IndexComponent,
    TimeInputComponent,
    DateInputTemplateDemoComponent,
    DateInputReactiveDemoComponent,
    TimeInputReactiveDemoComponent,
    TimeInputTemplateDemoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    ReactiveFormsModule,
    FormsModule,
    NgxDateTimeInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
