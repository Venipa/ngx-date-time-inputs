#### `DateInput` Component API

A custom control implementing `ControlValueAccessor`. The model is a string in the format `YYYY-MM-DD`.

- `selector: 'ngx-date-input'`

##### Inputs

- `displayFormat: string` The format for displaying the date in the input. See Moment's [formatting docs](https://momentjs.com/docs/#/displaying/format/). Default: `'LL'`
- `inputPlaceholder: string` A string to be used as the input's placeholder attribute. Default: `'Enter a date'`
- `inputId: string` A string to be used as the input's id.
- `inputClass: string` A string to be used as the input's class. Pass any error classes here.
