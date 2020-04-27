import { __extends } from 'tslib';
import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵProvidersFeature, forwardRef, ɵɵInheritDefinitionFeature, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵreference, ɵɵelementEnd, ɵɵproperty, ɵɵattribute, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, DefaultValueAccessor, NgControlStatus, FormControlDirective, ReactiveFormsModule } from '@angular/forms';
import { words } from 'lodash-es';
import * as momentNs from 'moment';
import { BehaviorSubject, Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

var moment = momentNs;
var DateParseResult = /** @class */ (function () {
    function DateParseResult() {
    }
    return DateParseResult;
}());
var TimeParseResult = /** @class */ (function () {
    function TimeParseResult() {
    }
    return TimeParseResult;
}());
var DateService = /** @class */ (function () {
    function DateService() {
        this._defaultDateFormat = new BehaviorSubject('LT');
        this.defaultDateFormat$ = this._defaultDateFormat.asObservable()
            .pipe(distinctUntilChanged());
    }
    Object.defineProperty(DateService.prototype, "defaultDateFormat", {
        get: function () {
            return this._defaultDateFormat.getValue();
        },
        set: function (val) {
            this._defaultDateFormat.next(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateService.prototype, "monthsRx", {
        get: function () {
            var n;
            var m;
            var monthNames = [];
            for (n = 0; n < 12; n++) {
                m = moment().month(n);
                monthNames.push(m.format('MMMM'));
                monthNames.push(m.format('MMM'));
            }
            return new RegExp(monthNames.join('|'), 'gi');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateService.prototype, "isLocaleMonthFirst", {
        get: function () {
            var m = moment('1965-12-22');
            var str = m.format('l');
            return str.indexOf('12') < str.indexOf('22');
        },
        enumerable: true,
        configurable: true
    });
    DateService.prototype.parseDate = function (dateStr) {
        var _this = this;
        var m = moment();
        var dateWords = words(dateStr);
        var result = { year: null, month: null, date: null };
        var unusedNumbers = [];
        dateWords.forEach(function (word) {
            if (null === result.month) {
                if (_this.monthsRx.test(word)) {
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
        unusedNumbers.forEach(function (n) {
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
    };
    DateService.prototype.parseTime = function (timeStr) {
        var rxResult;
        var meridian = null;
        if (/am/i.test(timeStr)) {
            meridian = 'am';
        }
        else {
            if (/pm/i.test(timeStr)) {
                meridian = 'pm';
            }
        }
        var rx = /\d{1,2}/g;
        var results = [];
        while ((rxResult = rx.exec(timeStr)) !== null) {
            results.push(rxResult[0]);
        }
        var hour = results[0] ? parseInt(results[0], 10) : 0;
        if ('pm' === meridian && hour < 12) {
            hour += 12;
        }
        var minute = results[1] ? parseInt(results[1], 10) : 0;
        return {
            hour: hour,
            minute: minute
        };
    };
    DateService.ɵfac = function DateService_Factory(t) { return new (t || DateService)(); };
    DateService.ɵprov = ɵɵdefineInjectable({ token: DateService, factory: DateService.ɵfac });
    return DateService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DateService, [{
        type: Injectable
    }], null, null); })();

var moment$1 = momentNs;
var AbstractInputComponent = /** @class */ (function () {
    function AbstractInputComponent(_dateService) {
        this._dateService = _dateService;
        this._control = new FormControl('', { updateOn: 'blur' });
        this._date = moment$1();
        this.propagateChange = function () { };
        this.propagateTouched = function () { };
    }
    Object.defineProperty(AbstractInputComponent.prototype, "dateService", {
        get: function () {
            return this._dateService;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractInputComponent.prototype, "control", {
        get: function () {
            return this._control;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractInputComponent.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: true,
        configurable: true
    });
    AbstractInputComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    AbstractInputComponent.prototype.registerOnTouched = function (fn) {
        this.propagateTouched = fn;
    };
    return AbstractInputComponent;
}());

var MODEL_DATE_FORMAT = 'YYYY-MM-DD';
var MODEL_TIME_FORMAT = 'HH:mm';

var DateInputComponent = /** @class */ (function (_super) {
    __extends(DateInputComponent, _super);
    function DateInputComponent(ds) {
        var _this = _super.call(this, ds) || this;
        _this.displayFormat = 'LL';
        _this.inputPlaceholder = 'Enter a date';
        return _this;
    }
    DateInputComponent.prototype.writeValue = function (dateString) {
        var d = this.dateService.parseDate(dateString);
        this.date.year(d.year).month(d.month).date(d.date);
        this.control.setValue(this.date.format(this.displayFormat));
    };
    DateInputComponent.prototype.handleInputChange = function () {
        var d = this.dateService.parseDate(this.control.value);
        this.date.year(d.year).month(d.month).date(d.date);
        var modelValue = this.date.format(MODEL_DATE_FORMAT);
        this.control.setValue(this.date.format(this.displayFormat));
        this.propagateChange(modelValue);
        this.propagateTouched(modelValue);
    };
    DateInputComponent.ɵfac = function DateInputComponent_Factory(t) { return new (t || DateInputComponent)(ɵɵdirectiveInject(DateService)); };
    DateInputComponent.ɵcmp = ɵɵdefineComponent({ type: DateInputComponent, selectors: [["ngx-date-input"]], inputs: { displayFormat: "displayFormat", inputPlaceholder: "inputPlaceholder", inputId: "inputId", inputClass: "inputClass" }, features: [ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return DateInputComponent; }),
                    multi: true
                }
            ]), ɵɵInheritDefinitionFeature], decls: 2, vars: 4, consts: [["type", "text", 3, "formControl", "blur", "keyup.enter"], ["input", ""]], template: function DateInputComponent_Template(rf, ctx) { if (rf & 1) {
            var _r1 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "input", 0, 1);
            ɵɵlistener("blur", function DateInputComponent_Template_input_blur_0_listener() { return ctx.handleInputChange(); })("keyup.enter", function DateInputComponent_Template_input_keyup_enter_0_listener() { ɵɵrestoreView(_r1); var _r0 = ɵɵreference(1); return _r0.blur(); });
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("formControl", ctx.control);
            ɵɵattribute("id", ctx.inputId)("placeholder", ctx.inputPlaceholder)("class", ctx.inputClass);
        } }, directives: [DefaultValueAccessor, NgControlStatus, FormControlDirective], encapsulation: 2 });
    return DateInputComponent;
}(AbstractInputComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(DateInputComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-date-input',
                templateUrl: './input.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return DateInputComponent; }),
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

var TimeInputComponent = /** @class */ (function (_super) {
    __extends(TimeInputComponent, _super);
    function TimeInputComponent(ds) {
        var _this = _super.call(this, ds) || this;
        _this.destroy$ = new Subject();
        _this.displayFormat = 'LT';
        _this.inputPlaceholder = 'Enter a time';
        if (_this.displayFormat === false) {
            _this.displayFormat = ds.defaultDateFormat;
            ds.defaultDateFormat$.pipe(takeUntil(_this.destroy$)).subscribe(function (x) {
                _this.handleInputChange();
            });
        }
        return _this;
    }
    TimeInputComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(),
            this.destroy$.complete();
    };
    TimeInputComponent.prototype.writeValue = function (timeString) {
        var t = this.dateService.parseTime(timeString);
        this.date.hour(t.hour).minute(t.minute);
        this.control.setValue(this.date.format(this.displayFormat));
    };
    TimeInputComponent.prototype.handleInputChange = function () {
        var t = this.dateService.parseTime(this.control.value);
        this.date.hour(t.hour).minute(t.minute);
        var modelValue = this.date.format(MODEL_TIME_FORMAT);
        this.control.setValue(this.date.format(this.displayFormat));
        this.propagateChange(modelValue);
        this.propagateTouched(modelValue);
    };
    TimeInputComponent.ɵfac = function TimeInputComponent_Factory(t) { return new (t || TimeInputComponent)(ɵɵdirectiveInject(DateService)); };
    TimeInputComponent.ɵcmp = ɵɵdefineComponent({ type: TimeInputComponent, selectors: [["ngx-time-input"]], inputs: { displayFormat: "displayFormat", inputPlaceholder: "inputPlaceholder", inputId: "inputId", inputClass: "inputClass" }, features: [ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return TimeInputComponent; }),
                    multi: true
                }
            ]), ɵɵInheritDefinitionFeature], decls: 2, vars: 4, consts: [["type", "text", 3, "formControl", "blur", "keyup.enter"], ["input", ""]], template: function TimeInputComponent_Template(rf, ctx) { if (rf & 1) {
            var _r1 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "input", 0, 1);
            ɵɵlistener("blur", function TimeInputComponent_Template_input_blur_0_listener() { return ctx.handleInputChange(); })("keyup.enter", function TimeInputComponent_Template_input_keyup_enter_0_listener() { ɵɵrestoreView(_r1); var _r0 = ɵɵreference(1); return _r0.blur(); });
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("formControl", ctx.control);
            ɵɵattribute("id", ctx.inputId)("placeholder", ctx.inputPlaceholder)("class", ctx.inputClass);
        } }, directives: [DefaultValueAccessor, NgControlStatus, FormControlDirective], encapsulation: 2 });
    return TimeInputComponent;
}(AbstractInputComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(TimeInputComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-time-input',
                templateUrl: './input.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return TimeInputComponent; }),
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

var NgxDateTimeInputsModule = /** @class */ (function () {
    function NgxDateTimeInputsModule() {
    }
    NgxDateTimeInputsModule.ɵmod = ɵɵdefineNgModule({ type: NgxDateTimeInputsModule });
    NgxDateTimeInputsModule.ɵinj = ɵɵdefineInjector({ factory: function NgxDateTimeInputsModule_Factory(t) { return new (t || NgxDateTimeInputsModule)(); }, providers: [DateService], imports: [[
                ReactiveFormsModule
            ]] });
    return NgxDateTimeInputsModule;
}());
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
