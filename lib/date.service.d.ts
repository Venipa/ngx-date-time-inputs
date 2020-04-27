import * as i0 from "@angular/core";
export declare class DateParseResult {
    year: number;
    month: number;
    date: number;
}
export declare class TimeParseResult {
    hour: number;
    minute: number;
}
export declare class DateService {
    private _defaultDateFormat;
    readonly defaultDateFormat$: import("rxjs").Observable<string>;
    get defaultDateFormat(): string;
    set defaultDateFormat(val: string);
    monthNamesRx: RegExp;
    monthAbbrsRx: RegExp;
    get monthsRx(): RegExp;
    get isLocaleMonthFirst(): boolean;
    parseDate(dateStr: string): DateParseResult;
    parseTime(timeStr: string): TimeParseResult;
    static ɵfac: i0.ɵɵFactoryDef<DateService, never>;
    static ɵprov: i0.ɵɵInjectableDef<DateService>;
}
