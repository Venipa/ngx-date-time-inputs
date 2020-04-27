import { DateService } from './date.service';
import { AbstractInputComponent } from './abstract-input.component';
import * as i0 from "@angular/core";
export declare class DateInputComponent extends AbstractInputComponent {
    displayFormat: string;
    inputPlaceholder: string;
    inputId: string;
    inputClass: string;
    constructor(ds: DateService);
    writeValue(dateString: string): void;
    handleInputChange(): void;
    static ɵfac: i0.ɵɵFactoryDef<DateInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DateInputComponent, "ngx-date-input", never, { "displayFormat": "displayFormat"; "inputPlaceholder": "inputPlaceholder"; "inputId": "inputId"; "inputClass": "inputClass"; }, {}, never, never>;
}
