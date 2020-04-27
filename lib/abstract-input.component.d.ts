import { ControlValueAccessor, FormControl } from '@angular/forms';
import * as moment_ from 'moment';
import { DateService } from './date.service';
export declare abstract class AbstractInputComponent implements ControlValueAccessor {
    private _dateService;
    private _control;
    private _date;
    abstract displayFormat: string;
    abstract inputPlaceholder: string;
    abstract inputId: string;
    abstract inputClass: string;
    propagateChange: Function;
    propagateTouched: Function;
    constructor(_dateService: DateService);
    get dateService(): DateService;
    get control(): FormControl;
    get date(): moment_.Moment;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: any): void;
    abstract writeValue(dateString: string): void;
    abstract handleInputChange(): void;
}
