import { __extends } from "tslib";
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateService } from './date.service';
import { AbstractInputComponent } from './abstract-input.component';
import { MODEL_DATE_FORMAT } from './shared';
import * as i0 from "@angular/core";
import * as i1 from "./date.service";
import * as i2 from "@angular/forms";
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
    DateInputComponent.ɵfac = function DateInputComponent_Factory(t) { return new (t || DateInputComponent)(i0.ɵɵdirectiveInject(i1.DateService)); };
    DateInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateInputComponent, selectors: [["ngx-date-input"]], inputs: { displayFormat: "displayFormat", inputPlaceholder: "inputPlaceholder", inputId: "inputId", inputClass: "inputClass" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return DateInputComponent; }),
                    multi: true
                }
            ]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 4, consts: [["type", "text", 3, "formControl", "blur", "keyup.enter"], ["input", ""]], template: function DateInputComponent_Template(rf, ctx) { if (rf & 1) {
            var _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "input", 0, 1);
            i0.ɵɵlistener("blur", function DateInputComponent_Template_input_blur_0_listener() { return ctx.handleInputChange(); })("keyup.enter", function DateInputComponent_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(1); return _r0.blur(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("formControl", ctx.control);
            i0.ɵɵattribute("id", ctx.inputId)("placeholder", ctx.inputPlaceholder)("class", ctx.inputClass);
        } }, directives: [i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlDirective], encapsulation: 2 });
    return DateInputComponent;
}(AbstractInputComponent));
export { DateInputComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateInputComponent, [{
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
    }], function () { return [{ type: i1.DateService }]; }, { displayFormat: [{
            type: Input
        }], inputPlaceholder: [{
            type: Input
        }], inputId: [{
            type: Input
        }], inputClass: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abm93em9vL25neC1kYXRlLXRpbWUtaW5wdXRzLyIsInNvdXJjZXMiOlsibGliL2RhdGUtaW5wdXQuY29tcG9uZW50LnRzIiwibGliL2lucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztBQUU3QztJQVd3QyxzQ0FBc0I7SUFLNUQsNEJBQ0UsRUFBZTtRQURqQixZQUdFLGtCQUFNLEVBQUUsQ0FBQyxTQUNWO1FBUlEsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsc0JBQWdCLEdBQUcsY0FBYyxDQUFDOztJQU8zQyxDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLFVBQWtCO1FBQzNCLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDhDQUFpQixHQUFqQjtRQUNFLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7d0ZBeEJVLGtCQUFrQjsyREFBbEIsa0JBQWtCLG9NQVJsQjtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxrQkFBa0IsRUFBbEIsQ0FBa0IsQ0FBQztvQkFDakQsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjs7WUNqQkgsbUNBU0E7WUFGRSw0RkFBUSx1QkFBbUIsSUFBQyxpSkFDYixVQUFZLElBREM7WUFQOUIsaUJBU0E7O1lBTEUseUNBQXVCO1lBRHZCLGlDQUFtQixxQ0FBQSx5QkFBQTs7NkJESHJCO0NBNENDLEFBcENELENBV3dDLHNCQUFzQixHQXlCN0Q7U0F6Qlksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FYOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxrQkFBa0IsRUFBbEIsQ0FBa0IsQ0FBQzt3QkFDakQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbmltcG9ydCB7IERhdGVTZXJ2aWNlIH0gZnJvbSAnLi9kYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWJzdHJhY3RJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vYWJzdHJhY3QtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IE1PREVMX0RBVEVfRk9STUFUIH0gZnJvbSAnLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZGF0ZS1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZUlucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVJbnB1dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0SW5wdXRDb21wb25lbnQge1xuICBASW5wdXQoKSBkaXNwbGF5Rm9ybWF0ID0gJ0xMJztcbiAgQElucHV0KCkgaW5wdXRQbGFjZWhvbGRlciA9ICdFbnRlciBhIGRhdGUnO1xuICBASW5wdXQoKSBpbnB1dElkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlucHV0Q2xhc3M6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgZHM6IERhdGVTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihkcyk7XG4gIH1cblxuICB3cml0ZVZhbHVlKGRhdGVTdHJpbmc6IHN0cmluZykge1xuICAgIGNvbnN0IGQgPSB0aGlzLmRhdGVTZXJ2aWNlLnBhcnNlRGF0ZShkYXRlU3RyaW5nKTtcbiAgICB0aGlzLmRhdGUueWVhcihkLnllYXIpLm1vbnRoKGQubW9udGgpLmRhdGUoZC5kYXRlKTtcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5kYXRlLmZvcm1hdCh0aGlzLmRpc3BsYXlGb3JtYXQpKTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKCkge1xuICAgIGNvbnN0IGQgPSB0aGlzLmRhdGVTZXJ2aWNlLnBhcnNlRGF0ZSh0aGlzLmNvbnRyb2wudmFsdWUpO1xuICAgIHRoaXMuZGF0ZS55ZWFyKGQueWVhcikubW9udGgoZC5tb250aCkuZGF0ZShkLmRhdGUpO1xuICAgIGNvbnN0IG1vZGVsVmFsdWUgPSB0aGlzLmRhdGUuZm9ybWF0KE1PREVMX0RBVEVfRk9STUFUKTtcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5kYXRlLmZvcm1hdCh0aGlzLmRpc3BsYXlGb3JtYXQpKTtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZShtb2RlbFZhbHVlKTtcbiAgICB0aGlzLnByb3BhZ2F0ZVRvdWNoZWQobW9kZWxWYWx1ZSk7XG4gIH1cbn1cbiIsIjxpbnB1dFxuICAjaW5wdXRcbiAgdHlwZT1cInRleHRcIlxuICBbYXR0ci5pZF09XCJpbnB1dElkXCJcbiAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICBbYXR0ci5wbGFjZWhvbGRlcl09XCJpbnB1dFBsYWNlaG9sZGVyXCJcbiAgW2F0dHIuY2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gIChibHVyKT1cImhhbmRsZUlucHV0Q2hhbmdlKClcIlxuICAoa2V5dXAuZW50ZXIpPVwiaW5wdXQuYmx1cigpXCI+XG4iXX0=