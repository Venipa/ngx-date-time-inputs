import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateService } from './date.service';
import { AbstractInputComponent } from './abstract-input.component';
import { MODEL_DATE_FORMAT } from './shared';
import * as i0 from "@angular/core";
import * as i1 from "./date.service";
import * as i2 from "@angular/forms";
export class DateInputComponent extends AbstractInputComponent {
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
DateInputComponent.ɵfac = function DateInputComponent_Factory(t) { return new (t || DateInputComponent)(i0.ɵɵdirectiveInject(i1.DateService)); };
DateInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateInputComponent, selectors: [["ngx-date-input"]], inputs: { displayFormat: "displayFormat", inputPlaceholder: "inputPlaceholder", inputId: "inputId", inputClass: "inputClass" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => DateInputComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 4, consts: [["type", "text", 3, "formControl", "blur", "keyup.enter"], ["input", ""]], template: function DateInputComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "input", 0, 1);
        i0.ɵɵlistener("blur", function DateInputComponent_Template_input_blur_0_listener() { return ctx.handleInputChange(); })("keyup.enter", function DateInputComponent_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r1); const _r0 = i0.ɵɵreference(1); return _r0.blur(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formControl", ctx.control);
        i0.ɵɵattribute("id", ctx.inputId)("placeholder", ctx.inputPlaceholder)("class", ctx.inputClass);
    } }, directives: [i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlDirective], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateInputComponent, [{
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
    }], function () { return [{ type: i1.DateService }]; }, { displayFormat: [{
            type: Input
        }], inputPlaceholder: [{
            type: Input
        }], inputId: [{
            type: Input
        }], inputClass: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abm93em9vL25neC1kYXRlLXRpbWUtaW5wdXRzLyIsInNvdXJjZXMiOlsibGliL2RhdGUtaW5wdXQuY29tcG9uZW50LnRzIiwibGliL2lucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUduRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sVUFBVSxDQUFDOzs7O0FBYTdDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxzQkFBc0I7SUFLNUQsWUFDRSxFQUFlO1FBRWYsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBUEgsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIscUJBQWdCLEdBQUcsY0FBYyxDQUFDO0lBTzNDLENBQUM7SUFFRCxVQUFVLENBQUMsVUFBa0I7UUFDM0IsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7b0ZBeEJVLGtCQUFrQjt1REFBbEIsa0JBQWtCLG9NQVJsQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2pELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7UUNqQkgsbUNBU0E7UUFGRSw0RkFBUSx1QkFBbUIsSUFBQyxtSkFDYixVQUFZLElBREM7UUFQOUIsaUJBU0E7O1FBTEUseUNBQXVCO1FBRHZCLGlDQUFtQixxQ0FBQSx5QkFBQTs7a0REZ0JSLGtCQUFrQjtjQVg5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7d0JBQ2pELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG5pbXBvcnQgeyBEYXRlU2VydmljZSB9IGZyb20gJy4vZGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEFic3RyYWN0SW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2Fic3RyYWN0LWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNT0RFTF9EQVRFX0ZPUk1BVCB9IGZyb20gJy4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRhdGUtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVJbnB1dENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdElucHV0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGlzcGxheUZvcm1hdCA9ICdMTCc7XG4gIEBJbnB1dCgpIGlucHV0UGxhY2Vob2xkZXIgPSAnRW50ZXIgYSBkYXRlJztcbiAgQElucHV0KCkgaW5wdXRJZDogc3RyaW5nO1xuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGRzOiBEYXRlU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIoZHMpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkID0gdGhpcy5kYXRlU2VydmljZS5wYXJzZURhdGUoZGF0ZVN0cmluZyk7XG4gICAgdGhpcy5kYXRlLnllYXIoZC55ZWFyKS5tb250aChkLm1vbnRoKS5kYXRlKGQuZGF0ZSk7XG4gICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHRoaXMuZGF0ZS5mb3JtYXQodGhpcy5kaXNwbGF5Rm9ybWF0KSk7XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZSgpIHtcbiAgICBjb25zdCBkID0gdGhpcy5kYXRlU2VydmljZS5wYXJzZURhdGUodGhpcy5jb250cm9sLnZhbHVlKTtcbiAgICB0aGlzLmRhdGUueWVhcihkLnllYXIpLm1vbnRoKGQubW9udGgpLmRhdGUoZC5kYXRlKTtcbiAgICBjb25zdCBtb2RlbFZhbHVlID0gdGhpcy5kYXRlLmZvcm1hdChNT0RFTF9EQVRFX0ZPUk1BVCk7XG4gICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHRoaXMuZGF0ZS5mb3JtYXQodGhpcy5kaXNwbGF5Rm9ybWF0KSk7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UobW9kZWxWYWx1ZSk7XG4gICAgdGhpcy5wcm9wYWdhdGVUb3VjaGVkKG1vZGVsVmFsdWUpO1xuICB9XG59XG4iLCI8aW5wdXRcbiAgI2lucHV0XG4gIHR5cGU9XCJ0ZXh0XCJcbiAgW2F0dHIuaWRdPVwiaW5wdXRJZFwiXG4gIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgW2F0dHIucGxhY2Vob2xkZXJdPVwiaW5wdXRQbGFjZWhvbGRlclwiXG4gIFthdHRyLmNsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAoYmx1cik9XCJoYW5kbGVJbnB1dENoYW5nZSgpXCJcbiAgKGtleXVwLmVudGVyKT1cImlucHV0LmJsdXIoKVwiPlxuIl19