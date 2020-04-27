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
export class TimeInputComponent extends AbstractInputComponent {
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
TimeInputComponent.ɵfac = function TimeInputComponent_Factory(t) { return new (t || TimeInputComponent)(i0.ɵɵdirectiveInject(i1.DateService)); };
TimeInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimeInputComponent, selectors: [["ngx-time-input"]], inputs: { displayFormat: "displayFormat", inputPlaceholder: "inputPlaceholder", inputId: "inputId", inputClass: "inputClass" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => TimeInputComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 4, consts: [["type", "text", 3, "formControl", "blur", "keyup.enter"], ["input", ""]], template: function TimeInputComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "input", 0, 1);
        i0.ɵɵlistener("blur", function TimeInputComponent_Template_input_blur_0_listener() { return ctx.handleInputChange(); })("keyup.enter", function TimeInputComponent_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r1); const _r0 = i0.ɵɵreference(1); return _r0.blur(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formControl", ctx.control);
        i0.ɵɵattribute("id", ctx.inputId)("placeholder", ctx.inputPlaceholder)("class", ctx.inputClass);
    } }, directives: [i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlDirective], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TimeInputComponent, [{
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
    }], function () { return [{ type: i1.DateService }]; }, { displayFormat: [{
            type: Input
        }], inputPlaceholder: [{
            type: Input
        }], inputId: [{
            type: Input
        }], inputClass: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abm93em9vL25neC1kYXRlLXRpbWUtaW5wdXRzLyIsInNvdXJjZXMiOlsibGliL3RpbWUtaW5wdXQuY29tcG9uZW50LnRzIiwibGliL2lucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUduRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBYzNDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxzQkFBc0I7SUFRNUQsWUFDRSxFQUFlO1FBRWYsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBVlosYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFdEIsa0JBQWEsR0FBUSxJQUFJLENBQUM7UUFDMUIscUJBQWdCLEdBQUcsY0FBYyxDQUFDO1FBUXpDLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxLQUFLLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7WUFDMUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxVQUFVLENBQUMsVUFBa0I7UUFDM0IsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDOztvRkF0Q1Usa0JBQWtCO3VEQUFsQixrQkFBa0Isb01BUmxCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDakQsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOztRQ3BCSCxtQ0FTQTtRQUZFLDRGQUFRLHVCQUFtQixJQUFDLG1KQUNiLFVBQVksSUFEQztRQVA5QixpQkFTQTs7UUFMRSx5Q0FBdUI7UUFEdkIsaUNBQW1CLHFDQUFBLHlCQUFBOztrRERtQlIsa0JBQWtCO2NBWDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDakQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7a0JBSUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIGZvcndhcmRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuaW1wb3J0IHsgRGF0ZVNlcnZpY2UgfSBmcm9tICcuL2RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBNT0RFTF9USU1FX0ZPUk1BVCB9IGZyb20gJy4vc2hhcmVkJztcbmltcG9ydCB7IEFic3RyYWN0SW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2Fic3RyYWN0LWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXRpbWUtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRpbWVJbnB1dENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUaW1lSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIEBJbnB1dCgpIGRpc3BsYXlGb3JtYXQ6IGFueSA9ICdMVCc7XG4gIEBJbnB1dCgpIGlucHV0UGxhY2Vob2xkZXIgPSAnRW50ZXIgYSB0aW1lJztcbiAgQElucHV0KCkgaW5wdXRJZDogc3RyaW5nO1xuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZHM6IERhdGVTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihkcyk7XG4gICAgaWYgKHRoaXMuZGlzcGxheUZvcm1hdCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9IGRzLmRlZmF1bHREYXRlRm9ybWF0O1xuICAgICAgZHMuZGVmYXVsdERhdGVGb3JtYXQkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoeCA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpLFxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodGltZVN0cmluZzogc3RyaW5nKSB7XG4gICAgY29uc3QgdCA9IHRoaXMuZGF0ZVNlcnZpY2UucGFyc2VUaW1lKHRpbWVTdHJpbmcpO1xuICAgIHRoaXMuZGF0ZS5ob3VyKHQuaG91cikubWludXRlKHQubWludXRlKTtcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5kYXRlLmZvcm1hdCh0aGlzLmRpc3BsYXlGb3JtYXQpKTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKCkge1xuICAgIGNvbnN0IHQgPSB0aGlzLmRhdGVTZXJ2aWNlLnBhcnNlVGltZSh0aGlzLmNvbnRyb2wudmFsdWUpO1xuICAgIHRoaXMuZGF0ZS5ob3VyKHQuaG91cikubWludXRlKHQubWludXRlKTtcbiAgICBjb25zdCBtb2RlbFZhbHVlID0gdGhpcy5kYXRlLmZvcm1hdChNT0RFTF9USU1FX0ZPUk1BVCk7XG4gICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHRoaXMuZGF0ZS5mb3JtYXQodGhpcy5kaXNwbGF5Rm9ybWF0KSk7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UobW9kZWxWYWx1ZSk7XG4gICAgdGhpcy5wcm9wYWdhdGVUb3VjaGVkKG1vZGVsVmFsdWUpO1xuICB9XG5cblxufVxuIiwiPGlucHV0XG4gICNpbnB1dFxuICB0eXBlPVwidGV4dFwiXG4gIFthdHRyLmlkXT1cImlucHV0SWRcIlxuICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gIFthdHRyLnBsYWNlaG9sZGVyXT1cImlucHV0UGxhY2Vob2xkZXJcIlxuICBbYXR0ci5jbGFzc109XCJpbnB1dENsYXNzXCJcbiAgKGJsdXIpPVwiaGFuZGxlSW5wdXRDaGFuZ2UoKVwiXG4gIChrZXl1cC5lbnRlcik9XCJpbnB1dC5ibHVyKClcIj5cbiJdfQ==