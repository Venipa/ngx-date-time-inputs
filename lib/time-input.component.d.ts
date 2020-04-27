import { OnDestroy } from '@angular/core';
import { DateService } from './date.service';
import { AbstractInputComponent } from './abstract-input.component';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class TimeInputComponent extends AbstractInputComponent implements OnDestroy {
    destroy$: Subject<void>;
    displayFormat: any;
    inputPlaceholder: string;
    inputId: string;
    inputClass: string;
    constructor(ds: DateService);
    ngOnDestroy(): void;
    writeValue(timeString: string): void;
    handleInputChange(): void;
    static ɵfac: i0.ɵɵFactoryDef<TimeInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TimeInputComponent, "ngx-time-input", never, { "displayFormat": "displayFormat"; "inputPlaceholder": "inputPlaceholder"; "inputId": "inputId"; "inputClass": "inputClass"; }, {}, never, never>;
}
