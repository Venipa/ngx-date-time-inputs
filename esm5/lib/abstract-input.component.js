import { FormControl } from '@angular/forms';
import * as moment_ from 'moment';
var moment = moment_;
var AbstractInputComponent = /** @class */ (function () {
    function AbstractInputComponent(_dateService) {
        this._dateService = _dateService;
        this._control = new FormControl('', { updateOn: 'blur' });
        this._date = moment();
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
export { AbstractInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5vd3pvby9uZ3gtZGF0ZS10aW1lLWlucHV0cy8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF3QixXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFLdkI7SUFhRSxnQ0FDVSxZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVozQixhQUFRLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBQ2hFLFVBQUssR0FBbUIsTUFBTSxFQUFFLENBQUM7UUFPekMsb0JBQWUsR0FBYSxjQUFPLENBQUMsQ0FBQztRQUNyQyxxQkFBZ0IsR0FBYSxjQUFPLENBQUMsQ0FBQztJQUlsQyxDQUFDO0lBR0wsc0JBQUksK0NBQVc7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx3Q0FBSTthQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBSUQsaURBQWdCLEdBQWhCLFVBQWlCLEVBQW9CO1FBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCxrREFBaUIsR0FBakIsVUFBa0IsRUFBTztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFLSCw2QkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xuXG5pbXBvcnQgeyBEYXRlU2VydmljZSB9IGZyb20gJy4vZGF0ZS5zZXJ2aWNlJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBwcml2YXRlIF9jb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywge3VwZGF0ZU9uOiAnYmx1cid9KTtcbiAgcHJpdmF0ZSBfZGF0ZTogbW9tZW50Xy5Nb21lbnQgPSBtb21lbnQoKTtcblxuICBhYnN0cmFjdCBkaXNwbGF5Rm9ybWF0OiBzdHJpbmc7XG4gIGFic3RyYWN0IGlucHV0UGxhY2Vob2xkZXI6IHN0cmluZztcbiAgYWJzdHJhY3QgaW5wdXRJZDogc3RyaW5nO1xuICBhYnN0cmFjdCBpbnB1dENsYXNzOiBzdHJpbmc7XG5cbiAgcHJvcGFnYXRlQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBwcm9wYWdhdGVUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2RhdGVTZXJ2aWNlOiBEYXRlU2VydmljZSxcbiAgKSB7IH1cblxuXG4gIGdldCBkYXRlU2VydmljZSgpOiBEYXRlU2VydmljZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVTZXJ2aWNlO1xuICB9XG5cbiAgZ2V0IGNvbnRyb2woKTogRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLl9jb250cm9sO1xuICB9XG5cbiAgZ2V0IGRhdGUoKTogbW9tZW50Xy5Nb21lbnQge1xuICAgIHJldHVybiB0aGlzLl9kYXRlO1xuICB9XG5cblxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZVRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIGFic3RyYWN0IHdyaXRlVmFsdWUoZGF0ZVN0cmluZzogc3RyaW5nKTogdm9pZDtcbiAgYWJzdHJhY3QgaGFuZGxlSW5wdXRDaGFuZ2UoKTogdm9pZDtcblxufVxuIl19