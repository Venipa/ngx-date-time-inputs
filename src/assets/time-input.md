#### `TimeInput` Component API

A custom control implementing `ControlValueAccessor`. The model is a string in the format `HH:mm` (24-hour time).

- `selector: 'ngx-time-input'`

##### Inputs

- `displayFormat: string` The format for displaying the date in the input. See Moment's [formatting docs](https://momentjs.com/docs/#/displaying/format/). Default: `'LT'` (time in the locale).
- `inputPlaceholder: string` A string to be used as the input's placeholder attribute. Default: `'Enter a time'`
- `inputId: string` A string to be used as the input's id.
- `inputClass: string` A string to be used as the input's class. Pass any error classes here.
