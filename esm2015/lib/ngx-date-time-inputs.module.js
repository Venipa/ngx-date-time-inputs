import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DateInputComponent } from './date-input.component';
import { TimeInputComponent } from './time-input.component';
import { DateService } from './date.service';
import * as i0 from "@angular/core";
export class NgxDateTimeInputsModule {
}
NgxDateTimeInputsModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxDateTimeInputsModule });
NgxDateTimeInputsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxDateTimeInputsModule_Factory(t) { return new (t || NgxDateTimeInputsModule)(); }, providers: [DateService], imports: [[
            ReactiveFormsModule
        ]] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGUtdGltZS1pbnB1dHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5vd3pvby9uZ3gtZGF0ZS10aW1lLWlucHV0cy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZGF0ZS10aW1lLWlucHV0cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBVTdDLE1BQU0sT0FBTyx1QkFBdUI7OzJEQUF2Qix1QkFBdUI7NkhBQXZCLHVCQUF1QixtQkFGdkIsQ0FBQyxXQUFXLENBQUMsWUFMZjtZQUNQLG1CQUFtQjtTQUNwQjt3RkFLVSx1QkFBdUIsbUJBSm5CLGtCQUFrQixFQUFFLGtCQUFrQixhQUZuRCxtQkFBbUIsYUFHWCxrQkFBa0IsRUFBRSxrQkFBa0I7a0RBR3JDLHVCQUF1QjtjQVJuQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUM7Z0JBQ3RELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGVJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGltZUlucHV0Q29tcG9uZW50IH0gZnJvbSAnLi90aW1lLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlU2VydmljZSB9IGZyb20gJy4vZGF0ZS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRGF0ZUlucHV0Q29tcG9uZW50LCBUaW1lSW5wdXRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbRGF0ZUlucHV0Q29tcG9uZW50LCBUaW1lSW5wdXRDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtEYXRlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RGF0ZVRpbWVJbnB1dHNNb2R1bGUgeyB9XG4iXX0=