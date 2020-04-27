(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('lodash-es'), require('moment'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@nowzoo/ngx-date-time-inputs', ['exports', '@angular/core', '@angular/forms', 'lodash-es', 'moment', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.nowzoo = global.nowzoo || {}, global.nowzoo['ngx-date-time-inputs'] = {}), global.ng.core, global.ng.forms, global.lodash, global.moment, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, forms, lodashEs, momentNs, rxjs, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
            this._defaultDateFormat = new rxjs.BehaviorSubject('LT');
            this.defaultDateFormat$ = this._defaultDateFormat.asObservable()
                .pipe(operators.distinctUntilChanged());
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
            var dateWords = lodashEs.words(dateStr);
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
        DateService.ɵprov = core.ɵɵdefineInjectable({ token: DateService, factory: DateService.ɵfac });
        return DateService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DateService, [{
            type: core.Injectable
        }], null, null); })();

    var moment$1 = momentNs;
    var AbstractInputComponent = /** @class */ (function () {
        function AbstractInputComponent(_dateService) {
            this._dateService = _dateService;
            this._control = new forms.FormControl('', { updateOn: 'blur' });
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
        DateInputComponent.ɵfac = function DateInputComponent_Factory(t) { return new (t || DateInputComponent)(core.ɵɵdirectiveInject(DateService)); };
        DateInputComponent.ɵcmp = core.ɵɵdefineComponent({ type: DateInputComponent, selectors: [["ngx-date-input"]], inputs: { displayFormat: "displayFormat", inputPlaceholder: "inputPlaceholder", inputId: "inputId", inputClass: "inputClass" }, features: [core.ɵɵProvidersFeature([
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return DateInputComponent; }),
                        multi: true
                    }
                ]), core.ɵɵInheritDefinitionFeature], decls: 2, vars: 4, consts: [["type", "text", 3, "formControl", "blur", "keyup.enter"], ["input", ""]], template: function DateInputComponent_Template(rf, ctx) { if (rf & 1) {
                var _r1 = core.ɵɵgetCurrentView();
                core.ɵɵelementStart(0, "input", 0, 1);
                core.ɵɵlistener("blur", function DateInputComponent_Template_input_blur_0_listener() { return ctx.handleInputChange(); })("keyup.enter", function DateInputComponent_Template_input_keyup_enter_0_listener() { core.ɵɵrestoreView(_r1); var _r0 = core.ɵɵreference(1); return _r0.blur(); });
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("formControl", ctx.control);
                core.ɵɵattribute("id", ctx.inputId)("placeholder", ctx.inputPlaceholder)("class", ctx.inputClass);
            } }, directives: [forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlDirective], encapsulation: 2 });
        return DateInputComponent;
    }(AbstractInputComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DateInputComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ngx-date-input',
                    templateUrl: './input.component.html',
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return DateInputComponent; }),
                            multi: true
                        }
                    ]
                }]
        }], function () { return [{ type: DateService }]; }, { displayFormat: [{
                type: core.Input
            }], inputPlaceholder: [{
                type: core.Input
            }], inputId: [{
                type: core.Input
            }], inputClass: [{
                type: core.Input
            }] }); })();

    var TimeInputComponent = /** @class */ (function (_super) {
        __extends(TimeInputComponent, _super);
        function TimeInputComponent(ds) {
            var _this = _super.call(this, ds) || this;
            _this.destroy$ = new rxjs.Subject();
            _this.displayFormat = 'LT';
            _this.inputPlaceholder = 'Enter a time';
            if (_this.displayFormat === false) {
                _this.displayFormat = ds.defaultDateFormat;
                ds.defaultDateFormat$.pipe(operators.takeUntil(_this.destroy$)).subscribe(function (x) {
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
        TimeInputComponent.ɵfac = function TimeInputComponent_Factory(t) { return new (t || TimeInputComponent)(core.ɵɵdirectiveInject(DateService)); };
        TimeInputComponent.ɵcmp = core.ɵɵdefineComponent({ type: TimeInputComponent, selectors: [["ngx-time-input"]], inputs: { displayFormat: "displayFormat", inputPlaceholder: "inputPlaceholder", inputId: "inputId", inputClass: "inputClass" }, features: [core.ɵɵProvidersFeature([
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return TimeInputComponent; }),
                        multi: true
                    }
                ]), core.ɵɵInheritDefinitionFeature], decls: 2, vars: 4, consts: [["type", "text", 3, "formControl", "blur", "keyup.enter"], ["input", ""]], template: function TimeInputComponent_Template(rf, ctx) { if (rf & 1) {
                var _r1 = core.ɵɵgetCurrentView();
                core.ɵɵelementStart(0, "input", 0, 1);
                core.ɵɵlistener("blur", function TimeInputComponent_Template_input_blur_0_listener() { return ctx.handleInputChange(); })("keyup.enter", function TimeInputComponent_Template_input_keyup_enter_0_listener() { core.ɵɵrestoreView(_r1); var _r0 = core.ɵɵreference(1); return _r0.blur(); });
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("formControl", ctx.control);
                core.ɵɵattribute("id", ctx.inputId)("placeholder", ctx.inputPlaceholder)("class", ctx.inputClass);
            } }, directives: [forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlDirective], encapsulation: 2 });
        return TimeInputComponent;
    }(AbstractInputComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TimeInputComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ngx-time-input',
                    templateUrl: './input.component.html',
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return TimeInputComponent; }),
                            multi: true
                        }
                    ]
                }]
        }], function () { return [{ type: DateService }]; }, { displayFormat: [{
                type: core.Input
            }], inputPlaceholder: [{
                type: core.Input
            }], inputId: [{
                type: core.Input
            }], inputClass: [{
                type: core.Input
            }] }); })();

    var NgxDateTimeInputsModule = /** @class */ (function () {
        function NgxDateTimeInputsModule() {
        }
        NgxDateTimeInputsModule.ɵmod = core.ɵɵdefineNgModule({ type: NgxDateTimeInputsModule });
        NgxDateTimeInputsModule.ɵinj = core.ɵɵdefineInjector({ factory: function NgxDateTimeInputsModule_Factory(t) { return new (t || NgxDateTimeInputsModule)(); }, providers: [DateService], imports: [[
                    forms.ReactiveFormsModule
                ]] });
        return NgxDateTimeInputsModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NgxDateTimeInputsModule, { declarations: [DateInputComponent, TimeInputComponent], imports: [forms.ReactiveFormsModule], exports: [DateInputComponent, TimeInputComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NgxDateTimeInputsModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        forms.ReactiveFormsModule
                    ],
                    declarations: [DateInputComponent, TimeInputComponent],
                    exports: [DateInputComponent, TimeInputComponent],
                    providers: [DateService]
                }]
        }], null, null); })();

    exports.DateInputComponent = DateInputComponent;
    exports.DateParseResult = DateParseResult;
    exports.DateService = DateService;
    exports.NgxDateTimeInputsModule = NgxDateTimeInputsModule;
    exports.TimeInputComponent = TimeInputComponent;
    exports.TimeParseResult = TimeParseResult;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=nowzoo-ngx-date-time-inputs.umd.js.map
