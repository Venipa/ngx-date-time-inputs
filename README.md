# ngx-date-time-inputs

Simple date and time inputs. No calendars or fancy controls or polyfills. They just guess the
date or time the user means. Forgiving and (more or less) locale-aware.

[Demo Site](https://nowzoo.github.io/ngx-date-time-inputs/)

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

## Time Input API
The component implements `ControlValueAccessor`. The model is a string in the format `HH:mm` (24-hour time).

Selector: `ngx-time-input`

Inputs

- `displayFormat: string` The format for displaying the date in the input. See Moment's [formatting docs](https://momentjs.com/docs/#/displaying/format/). Default: `'LT'` (time in the locale).
- `inputPlaceholder: string` A string to be used as the input's placeholder attribute. Default: `'Enter a time'`
- `inputId: string` A string to be used as the input's id.
- `inputClass: string` A string to be used as the input's class. Pass any error classes here.



## Development

Contributions are welcome.

```bash
git clone git@github.com:nowzoo/ngx-date-time-inputs.git
cd ngx-date-time-inputs
npm i
```
This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

The library files are located in `projects/ngx-date-time-inputs`


Run `ng serve` for a dev server with a demo app. Navigate to `http://localhost:4200/`.


### Building the library

Run `ng build ngx-date-time-inputs` to build the library after you change it. The dev server does not rebuild the library automatically.

### Running unit tests

Run `ng test ngx-date-time-inputs` to execute the unit tests via [Karma](https://karma-runner.github.io).

The library is also set up to run tests using Wallaby using the config at `projects/ngx-date-time-inputs/wallaby.js`

## License

[MIT](https://github.com/nowzoo/ngx-date-time-inputs/blob/master/LICENSE)
