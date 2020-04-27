import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DateInputComponent } from './date-input.component';
import { TimeInputComponent } from './time-input.component';
import { DateService } from './date.service';
import * as i0 from "@angular/core";
var NgxDateTimeInputsModule = /** @class */ (function () {
    function NgxDateTimeInputsModule() {
    }
    NgxDateTimeInputsModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxDateTimeInputsModule });
    NgxDateTimeInputsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxDateTimeInputsModule_Factory(t) { return new (t || NgxDateTimeInputsModule)(); }, providers: [DateService], imports: [[
                ReactiveFormsModule
            ]] });
    return NgxDateTimeInputsModule;
}());
export { NgxDateTimeInputsModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxDateTimeInputsModule, { declarations: [DateInputComponent, TimeInputComponent], imports: [ReactiveFormsModule], exports: [DateInputComponent, TimeInputComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDateTimeInputsModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGUtdGltZS1pbnB1dHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5vd3pvby9uZ3gtZGF0ZS10aW1lLWlucHV0cy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZGF0ZS10aW1lLWlucHV0cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRTdDO0lBQUE7S0FRd0M7K0RBQTNCLHVCQUF1QjtpSUFBdkIsdUJBQXVCLG1CQUZ2QixDQUFDLFdBQVcsQ0FBQyxZQUxmO2dCQUNQLG1CQUFtQjthQUNwQjtrQ0FUSDtDQWN3QyxBQVJ4QyxJQVF3QztTQUEzQix1QkFBdUI7d0ZBQXZCLHVCQUF1QixtQkFKbkIsa0JBQWtCLEVBQUUsa0JBQWtCLGFBRm5ELG1CQUFtQixhQUdYLGtCQUFrQixFQUFFLGtCQUFrQjtrREFHckMsdUJBQXVCO2NBUm5DLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQztnQkFDdEQsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUM7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGF0ZUlucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3RpbWUtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVTZXJ2aWNlIH0gZnJvbSAnLi9kYXRlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtEYXRlSW5wdXRDb21wb25lbnQsIFRpbWVJbnB1dENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtEYXRlSW5wdXRDb21wb25lbnQsIFRpbWVJbnB1dENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0RhdGVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEYXRlVGltZUlucHV0c01vZHVsZSB7IH1cbiJdfQ==