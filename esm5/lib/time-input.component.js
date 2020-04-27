import { __extends } from "tslib";
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateService } from './date.service';
import { MODEL_TIME_FORMAT } from './shared';
import { AbstractInputComponent } from './abstract-input.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./date.service";
import * as i2 from "@angular/forms";
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
    TimeInputComponent.ɵfac = function TimeInputComponent_Factory(t) { return new (t || TimeInputComponent)(i0.ɵɵdirectiveInject(i1.DateService)); };
    TimeInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimeInputComponent, selectors: [["ngx-time-input"]], inputs: { displayFormat: "displayFormat", inputPlaceholder: "inputPlaceholder", inputId: "inputId", inputClass: "inputClass" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return TimeInputComponent; }),
                    multi: true
                }
            ]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 4, consts: [["type", "text", 3, "formControl", "blur", "keyup.enter"], ["input", ""]], template: function TimeInputComponent_Template(rf, ctx) { if (rf & 1) {
            var _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "input", 0, 1);
            i0.ɵɵlistener("blur", function TimeInputComponent_Template_input_blur_0_listener() { return ctx.handleInputChange(); })("keyup.enter", function TimeInputComponent_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(1); return _r0.blur(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("formControl", ctx.control);
            i0.ɵɵattribute("id", ctx.inputId)("placeholder", ctx.inputPlaceholder)("class", ctx.inputClass);
        } }, directives: [i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlDirective], encapsulation: 2 });
    return TimeInputComponent;
}(AbstractInputComponent));
export { TimeInputComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TimeInputComponent, [{
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
    }], function () { return [{ type: i1.DateService }]; }, { displayFormat: [{
            type: Input
        }], inputPlaceholder: [{
            type: Input
        }], inputId: [{
            type: Input
        }], inputClass: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abm93em9vL25neC1kYXRlLXRpbWUtaW5wdXRzLyIsInNvdXJjZXMiOlsibGliL3RpbWUtaW5wdXQuY29tcG9uZW50LnRzIiwibGliL2lucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUczQztJQVd3QyxzQ0FBc0I7SUFRNUQsNEJBQ0UsRUFBZTtRQURqQixZQUdFLGtCQUFNLEVBQUUsQ0FBQyxTQU9WO1FBakJELGNBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRXRCLG1CQUFhLEdBQVEsSUFBSSxDQUFDO1FBQzFCLHNCQUFnQixHQUFHLGNBQWMsQ0FBQztRQVF6QyxJQUFJLEtBQUksQ0FBQyxhQUFhLEtBQUssS0FBSyxFQUFFO1lBQ2hDLEtBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQzFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7Z0JBQzlELEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7O0lBQ0gsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCx1Q0FBVSxHQUFWLFVBQVcsVUFBa0I7UUFDM0IsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDhDQUFpQixHQUFqQjtRQUNFLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDO3dGQXRDVSxrQkFBa0I7MkRBQWxCLGtCQUFrQixvTUFSbEI7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLENBQUM7b0JBQ2pELEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7O1lDcEJILG1DQVNBO1lBRkUsNEZBQVEsdUJBQW1CLElBQUMsaUpBQ2IsVUFBWSxJQURDO1lBUDlCLGlCQVNBOztZQUxFLHlDQUF1QjtZQUR2QixpQ0FBbUIscUNBQUEseUJBQUE7OzZCREhyQjtDQStEQyxBQXBERCxDQVd3QyxzQkFBc0IsR0F5QzdEO1NBekNZLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBWDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLENBQUM7d0JBQ2pELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7O2tCQUlFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBmb3J3YXJkUmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbmltcG9ydCB7IERhdGVTZXJ2aWNlIH0gZnJvbSAnLi9kYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTU9ERUxfVElNRV9GT1JNQVQgfSBmcm9tICcuL3NoYXJlZCc7XG5pbXBvcnQgeyBBYnN0cmFjdElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9hYnN0cmFjdC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC10aW1lLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaW1lSW5wdXRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGltZUlucHV0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBASW5wdXQoKSBkaXNwbGF5Rm9ybWF0OiBhbnkgPSAnTFQnO1xuICBASW5wdXQoKSBpbnB1dFBsYWNlaG9sZGVyID0gJ0VudGVyIGEgdGltZSc7XG4gIEBJbnB1dCgpIGlucHV0SWQ6IHN0cmluZztcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGRzOiBEYXRlU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIoZHMpO1xuICAgIGlmICh0aGlzLmRpc3BsYXlGb3JtYXQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSBkcy5kZWZhdWx0RGF0ZUZvcm1hdDtcbiAgICAgIGRzLmRlZmF1bHREYXRlRm9ybWF0JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHggPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKSxcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHRpbWVTdHJpbmc6IHN0cmluZykge1xuICAgIGNvbnN0IHQgPSB0aGlzLmRhdGVTZXJ2aWNlLnBhcnNlVGltZSh0aW1lU3RyaW5nKTtcbiAgICB0aGlzLmRhdGUuaG91cih0LmhvdXIpLm1pbnV0ZSh0Lm1pbnV0ZSk7XG4gICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHRoaXMuZGF0ZS5mb3JtYXQodGhpcy5kaXNwbGF5Rm9ybWF0KSk7XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZSgpIHtcbiAgICBjb25zdCB0ID0gdGhpcy5kYXRlU2VydmljZS5wYXJzZVRpbWUodGhpcy5jb250cm9sLnZhbHVlKTtcbiAgICB0aGlzLmRhdGUuaG91cih0LmhvdXIpLm1pbnV0ZSh0Lm1pbnV0ZSk7XG4gICAgY29uc3QgbW9kZWxWYWx1ZSA9IHRoaXMuZGF0ZS5mb3JtYXQoTU9ERUxfVElNRV9GT1JNQVQpO1xuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh0aGlzLmRhdGUuZm9ybWF0KHRoaXMuZGlzcGxheUZvcm1hdCkpO1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKG1vZGVsVmFsdWUpO1xuICAgIHRoaXMucHJvcGFnYXRlVG91Y2hlZChtb2RlbFZhbHVlKTtcbiAgfVxuXG5cbn1cbiIsIjxpbnB1dFxuICAjaW5wdXRcbiAgdHlwZT1cInRleHRcIlxuICBbYXR0ci5pZF09XCJpbnB1dElkXCJcbiAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICBbYXR0ci5wbGFjZWhvbGRlcl09XCJpbnB1dFBsYWNlaG9sZGVyXCJcbiAgW2F0dHIuY2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gIChibHVyKT1cImhhbmRsZUlucHV0Q2hhbmdlKClcIlxuICAoa2V5dXAuZW50ZXIpPVwiaW5wdXQuYmx1cigpXCI+XG4iXX0=