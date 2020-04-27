import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵProvidersFeature, forwardRef, ɵɵInheritDefinitionFeature, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵreference, ɵɵelementEnd, ɵɵproperty, ɵɵattribute, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, DefaultValueAccessor, NgControlStatus, FormControlDirective, ReactiveFormsModule } from '@angular/forms';
import { words } from 'lodash-es';
import * as momentNs from 'moment';
import { BehaviorSubject, Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

const moment = momentNs;
class DateParseResult {
}
class TimeParseResult {
}
class DateService {
    constructor() {
        this._defaultDateFormat = new BehaviorSubject('LT');
        this.defaultDateFormat$ = this._defaultDateFormat.asObservable()
            .pipe(distinctUntilChanged());
    }
    get defaultDateFormat() {
        return this._defaultDateFormat.getValue();
    }
    set defaultDateFormat(val) {
        this._defaultDateFormat.next(val);
    }
    get monthsRx() {
        let n;
        let m;
        const monthNames = [];
        for (n = 0; n < 12; n++) {
            m = moment().month(n);
            monthNames.push(m.format('MMMM'));
            monthNames.push(m.format('MMM'));
        }
        return new RegExp(monthNames.join('|'), 'gi');
    }
    get isLocaleMonthFirst() {
        const m = moment('1965-12-22');
        const str = m.format('l');
        return str.indexOf('12') < str.indexOf('22');
    }
    parseDate(dateStr) {
        const m = moment();
        const dateWords = words(dateStr);
        const result = { year: null, month: null, date: null };
        const unusedNumbers = [];
        dateWords.forEach(word => {
            if (null === result.month) {
                if (this.monthsRx.test(word)) {
                    result.month = m.month(word).month();
                    return;
                }
            }
            if (null === result.year) {
                if (/^\d{4}$/.test(word)) {
                    result.year = parseInt(word, 10);
                    return;
                }
            }
            if (/^\d+$/.test(word)) {
                unusedNumbers.push(parseInt(word, 10));
            }
        });
        if (null === result.year) {
            result.year = moment().year();
        }
        if (!this.isLocaleMonthFirst) {
            unusedNumbers.reverse();
        }
        unusedNumbers.forEach((n) => {
            if (n >= 1 && n <= 12 && null === result.month) {
                result.month = n - 1;
            }
            else {
                if (n >= 1 && n <= 31 && null === result.date) {
                    result.date = n;
                }
            }
        });
        if (null === result.month) {
            result.month = moment().month();
        }
        if (null === result.date) {
            result.date = moment().date();
        }
        return result;
    }
    parseTime(timeStr) {
        let rxResult;
        let meridian = null;
        if (/am/i.test(timeStr)) {
            meridian = 'am';
        }
        else {
            if (/pm/i.test(timeStr)) {
                meridian = 'pm';
            }
        }
        const rx = /\d{1,2}/g;
        const results = [];
        while ((rxResult = rx.exec(timeStr)) !== null) {
            results.push(rxResult[0]);
        }
        let hour = results[0] ? parseInt(results[0], 10) : 0;
        if ('pm' === meridian && hour < 12) {
            hour += 12;
        }
        const minute = results[1] ? parseInt(results[1], 10) : 0;
        return {
            hour: hour,
            minute: minute
        };
    }
}
DateService.ɵfac = function DateService_Factory(t) { return new (t || DateService)(); };
DateService.ɵprov = ɵɵdefineInjectable({ token: DateService, factory: DateService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DateService, [{
        type: Injectable
    }], null, null); })();

const moment$1 = momentNs;
class AbstractInputComponent {
    constructor(_dateService) {
        this._dateService = _dateService;
        this._control = new FormControl('', { updateOn: 'blur' });
        this._date = moment$1();
        this.propagateChange = () => { };
        this.propagateTouched = () => { };
    }
    get dateService() {
        return this._dateService;
    }
    get control() {
        return this._control;
    }
    get date() {
        return this._date;
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.propagateTouched = fn;
    }
}

const MODEL_DATE_FORMAT = 'YYYY-MM-DD';
const MODEL_TIME_FORMAT = 'HH:mm';

class DateInputComponent extends AbstractInputComponent {
    constructor(ds) {
        super(ds);
        this.displayFormat = 'LL';
        this.inputPlaceholder = 'Enter a date';
    }
    writeValue(dateString) {
        const d = this.dateService.parseDate(dateString);
        this.date.year(d.year).month(d.month).date(d.date);
        this.control.setValue(this.date.format(this.displayFormat));
    }
    handleInputChange() {
        const d = this.dateService.parseDate(this.control.value);
        this.date.year(d.year).month(d.month).date(d.date);
        const modelValue = this.date.format(MODEL_DATE_FORMAT);
        this.control.setValue(this.date.format(this.displayFormat));
        this.propagateChange(modelValue);
        this.propagateTouched(modelValue);
    }
}
DateInputComponent.ɵfac = function DateInputComponent_Factory(t) { return new (t || DateInputComponent)(ɵɵdirectiveInject(DateService)); };
DateInputComponent.ɵcmp = ɵɵdefineComponent({ type: DateInputComponent, selectors: [["ngx-date-input"]], inputs: { displayFormat: "displayFormat", inputPlaceholder: "inputPlaceholder", inputId: "inputId", inputClass: "inputClass" }, features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => DateInputComponent),
                multi: true
            }
        ]), ɵɵInheritDefinitionFeature], decls: 2, vars: 4, consts: [["type", "text", 3, "formControl", "blur", "keyup.enter"], ["input", ""]], template: function DateInputComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "input", 0, 1);
        ɵɵlistener("blur", function DateInputComponent_Template_input_blur_0_listener() { return ctx.handleInputChange(); })("keyup.enter", function DateInputComponent_Template_input_keyup_enter_0_listener() { ɵɵrestoreView(_r1); const _r0 = ɵɵreference(1); return _r0.blur(); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("formControl", ctx.control);
        ɵɵattribute("id", ctx.inputId)("placeholder", ctx.inputPlaceholder)("class", ctx.inputClass);
    } }, directives: [DefaultValueAccessor, NgControlStatus, FormControlDirective], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DateInputComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-date-input',
                templateUrl: './input.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DateInputComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: DateService }]; }, { displayFormat: [{
            type: Input
        }], inputPlaceholder: [{
            type: Input
        }], inputId: [{
            type: Input
        }], inputClass: [{
            type: Input
        }] }); })();

class TimeInputComponent extends AbstractInputComponent {
    constructor(ds) {
        super(ds);
        this.destroy$ = new Subject();
        this.displayFormat = 'LT';
        this.inputPlaceholder = 'Enter a time';
        if (this.displayFormat === false) {
            this.displayFormat = ds.defaultDateFormat;
            ds.defaultDateFormat$.pipe(takeUntil(this.destroy$)).subscribe(x => {
                this.handleInputChange();
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next(),
            this.destroy$.complete();
    }
    writeValue(timeString) {
        const t = this.dateService.parseTime(timeString);
        this.date.hour(t.hour).minute(t.minute);
        this.control.setValue(this.date.format(this.displayFormat));
    }
    handleInputChange() {
        const t = this.dateService.parseTime(this.control.value);
        this.date.hour(t.hour).minute(t.minute);
        const modelValue = this.date.format(MODEL_TIME_FORMAT);
        this.control.setValue(this.date.format(this.displayFormat));
        this.propagateChange(modelValue);
        this.propagateTouched(modelValue);
    }
}
TimeInputComponent.ɵfac = function TimeInputComponent_Factory(t) { return new (t || TimeInputComponent)(ɵɵdirectiveInject(DateService)); };
TimeInputComponent.ɵcmp = ɵɵdefineComponent({ type: TimeInputComponent, selectors: [["ngx-time-input"]], inputs: { displayFormat: "displayFormat", inputPlaceholder: "inputPlaceholder", inputId: "inputId", inputClass: "inputClass" }, features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => TimeInputComponent),
                multi: true
            }
        ]), ɵɵInheritDefinitionFeature], decls: 2, vars: 4, consts: [["type", "text", 3, "formControl", "blur", "keyup.enter"], ["input", ""]], template: function TimeInputComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "input", 0, 1);
        ɵɵlistener("blur", function TimeInputComponent_Template_input_blur_0_listener() { return ctx.handleInputChange(); })("keyup.enter", function TimeInputComponent_Template_input_keyup_enter_0_listener() { ɵɵrestoreView(_r1); const _r0 = ɵɵreference(1); return _r0.blur(); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("formControl", ctx.control);
        ɵɵattribute("id", ctx.inputId)("placeholder", ctx.inputPlaceholder)("class", ctx.inputClass);
    } }, directives: [DefaultValueAccessor, NgControlStatus, FormControlDirective], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TimeInputComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-time-input',
                templateUrl: './input.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TimeInputComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: DateService }]; }, { displayFormat: [{
            type: Input
        }], inputPlaceholder: [{
            type: Input
        }], inputId: [{
            type: Input
        }], inputClass: [{
            type: Input
        }] }); })();

class NgxDateTimeInputsModule {
}
NgxDateTimeInputsModule.ɵmod = ɵɵdefineNgModule({ type: NgxDateTimeInputsModule });
NgxDateTimeInputsModule.ɵinj = ɵɵdefineInjector({ factory: function NgxDateTimeInputsModule_Factory(t) { return new (t || NgxDateTimeInputsModule)(); }, providers: [DateService], imports: [[
            ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgxDateTimeInputsModule, { declarations: [DateInputComponent, TimeInputComponent], imports: [ReactiveFormsModule], exports: [DateInputComponent, TimeInputComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxDateTimeInputsModule, [{
        type: NgModule,
        args: [{
                imports: [
                    ReactiveFormsModule
                ],
                declarations: [DateInputComponent, TimeInputComponent],
                exports: [DateInputComponent, TimeInputComponent],
                providers: [DateService]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-date-time-inputs
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DateInputComponent, DateParseResult, DateService, NgxDateTimeInputsModule, TimeInputComponent, TimeParseResult };
//# sourceMappingURL=nowzoo-ngx-date-time-inputs.js.map
