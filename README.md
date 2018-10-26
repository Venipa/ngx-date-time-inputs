# ngx-date-time-inputs

Simple date and time inputs. No calendars or fancy controls or polyfills. They just guess the
date or time the user means. Forgiving and (more or less) locale-aware.

## Installation

Install the library and its dependancies (moment and lodash-es).

```bash
npm i --save @nowzoo/ngx-date-time-inputs moment lodash-es
```

## Usage

Import the library module...

```typescript
import { NgxDateTimeInputsModule } from '@nowzoo/ngx-date-time-inputs';
@NgModule({
  imports: [
    NgxDateTimeInputsModule
  ]
})
export class MyModule { }
```

The `ngx-date-input` and `ngx-time-input` components are
now available for you to use:

```html
<ngx-date-input
  [inputId]="formId + 'date'"
  inputClass="form-control"
  [(ngModel)]="date"></ngx-date-input>
<ngx-time-input
  [inputId]="formId + 'time'"
  inputClass="form-control"
  [(ngModel)]="time"></ngx-time-input>
```

## Date Input API
The component implements `ControlValueAccessor`. The model is a string in the format `YYYY-MM-DD`.

Selector: `ngx-date-input`

Inputs
- `displayFormat: string` The format for displaying the date in the input. See Moment's [formatting docs](https://momentjs.com/docs/#/displaying/format/).
  Default: `'LL'` (e.g., September 4, 1986).
- `inputPlaceholder: string` A string to be used as the input's placeholder attribute. Default: `'Enter a date'`
- `inputId: string` A string to be used as the input's id.
- `inputClass: string` A string to be used as the input's class. Pass any error classes here.

### Time Input API

Selector: `ngx-time-input`

Inputs

- `displayFormat: string` The format for displaying the date in the input. See Moment's [formatting docs](https://momentjs.com/docs/#/displaying/format/). Default: `'LT'` (time in the locale).
- `inputPlaceholder: string` A string to be used as the input's placeholder attribute. Default: `'Enter a time'`
- `inputId: string` A string to be used as the input's id.
- `inputClass: string` A string to be used as the input's class. Pass any error classes here.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
