import { Injectable } from '@angular/core';
import { words } from 'lodash-es';
import * as momentNs from 'moment';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import * as i0 from "@angular/core";
var moment = momentNs;
var DateParseResult = /** @class */ (function () {
    function DateParseResult() {
    }
    return DateParseResult;
}());
export { DateParseResult };
var TimeParseResult = /** @class */ (function () {
    function TimeParseResult() {
    }
    return TimeParseResult;
}());
export { TimeParseResult };
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
    DateService.ɵprov = i0.ɵɵdefineInjectable({ token: DateService, factory: DateService.ɵfac });
    return DateService;
}());
export { DateService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5vd3pvby9uZ3gtZGF0ZS10aW1lLWlucHV0cy8iLCJzb3VyY2VzIjpbImxpYi9kYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2xDLE9BQU8sS0FBSyxRQUFRLE1BQU0sUUFBUSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXRELElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUd4QjtJQUFBO0lBSUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7O0FBQ0Q7SUFBQTtJQUdBLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOztBQUNEO0lBQUE7UUFFVSx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUN0RCx1QkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFO2FBQ2pFLElBQUksQ0FDSCxvQkFBb0IsRUFBRSxDQUN2QixDQUFDO0tBOEdMO0lBN0dDLHNCQUFJLDBDQUFpQjthQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLENBQUM7YUFDRCxVQUFzQixHQUFXO1lBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQzs7O09BSEE7SUFPRCxzQkFBSSxpQ0FBUTthQUFaO1lBQ0UsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsQ0FBQztZQUNOLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztZ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SUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNsQyxJQUFJLElBQUksRUFBRSxDQUFDO1NBQ1o7UUFDRCxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUM7SUFDSixDQUFDOzBFQS9HVSxXQUFXO3VEQUFYLFdBQVcsV0FBWCxXQUFXO3NCQW5CeEI7Q0FzSUMsQUFwSEQsSUFvSEM7U0FuSFksV0FBVztrREFBWCxXQUFXO2NBRHZCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB3b3JkcyB9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgKiBhcyBtb21lbnROcyBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgbW9tZW50ID0gbW9tZW50TnM7XG5cblxuZXhwb3J0IGNsYXNzIERhdGVQYXJzZVJlc3VsdCB7XG4gIHllYXI6IG51bWJlcjtcbiAgbW9udGg6IG51bWJlcjtcbiAgZGF0ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNsYXNzIFRpbWVQYXJzZVJlc3VsdCB7XG4gIGhvdXI6IG51bWJlcjtcbiAgbWludXRlOiBudW1iZXI7XG59XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0ZVNlcnZpY2Uge1xuICBwcml2YXRlIF9kZWZhdWx0RGF0ZUZvcm1hdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignTFQnKTtcbiAgcmVhZG9ubHkgZGVmYXVsdERhdGVGb3JtYXQkID0gdGhpcy5fZGVmYXVsdERhdGVGb3JtYXQuYXNPYnNlcnZhYmxlKClcbiAgICAucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICBnZXQgZGVmYXVsdERhdGVGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHREYXRlRm9ybWF0LmdldFZhbHVlKCk7XG4gIH1cbiAgc2V0IGRlZmF1bHREYXRlRm9ybWF0KHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdERhdGVGb3JtYXQubmV4dCh2YWwpO1xuICB9XG4gIG1vbnRoTmFtZXNSeDogUmVnRXhwO1xuICBtb250aEFiYnJzUng6IFJlZ0V4cDtcblxuICBnZXQgbW9udGhzUngoKTogUmVnRXhwIHtcbiAgICBsZXQgbjtcbiAgICBsZXQgbTtcbiAgICBjb25zdCBtb250aE5hbWVzID0gW107XG4gICAgZm9yIChuID0gMDsgbiA8IDEyOyBuKyspIHtcbiAgICAgIG0gPSBtb21lbnQoKS5tb250aChuKTtcbiAgICAgIG1vbnRoTmFtZXMucHVzaChtLmZvcm1hdCgnTU1NTScpKTtcbiAgICAgIG1vbnRoTmFtZXMucHVzaChtLmZvcm1hdCgnTU1NJykpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChtb250aE5hbWVzLmpvaW4oJ3wnKSwgJ2dpJyk7XG4gIH1cblxuICBnZXQgaXNMb2NhbGVNb250aEZpcnN0KCk6IGJvb2xlYW4gIHtcbiAgICBjb25zdCBtID0gbW9tZW50KCcxOTY1LTEyLTIyJyk7XG4gICAgY29uc3Qgc3RyID0gbS5mb3JtYXQoJ2wnKTtcbiAgICByZXR1cm4gc3RyLmluZGV4T2YoJzEyJykgPCBzdHIuaW5kZXhPZignMjInKTtcbiAgfVxuXG5cbiAgcGFyc2VEYXRlKGRhdGVTdHI6IHN0cmluZyk6IERhdGVQYXJzZVJlc3VsdCB7XG4gICAgY29uc3QgbSA9IG1vbWVudCgpO1xuICAgIGNvbnN0IGRhdGVXb3JkcyA9IHdvcmRzKGRhdGVTdHIpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHt5ZWFyOiBudWxsLCBtb250aDogbnVsbCwgZGF0ZTogbnVsbH07XG4gICAgY29uc3QgdW51c2VkTnVtYmVycyA9IFtdO1xuICAgIGRhdGVXb3Jkcy5mb3JFYWNoKHdvcmQgPT4ge1xuICAgICAgaWYgKG51bGwgPT09IHJlc3VsdC5tb250aCkge1xuICAgICAgICBpZiAodGhpcy5tb250aHNSeC50ZXN0KHdvcmQpKSB7XG4gICAgICAgICAgcmVzdWx0Lm1vbnRoID0gbS5tb250aCh3b3JkKS5tb250aCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG51bGwgPT09IHJlc3VsdC55ZWFyKSB7XG4gICAgICAgIGlmICgvXlxcZHs0fSQvLnRlc3Qod29yZCkpIHtcbiAgICAgICAgICByZXN1bHQueWVhciA9IHBhcnNlSW50KHdvcmQsIDEwKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgvXlxcZCskLy50ZXN0KHdvcmQpKSB7XG4gICAgICAgIHVudXNlZE51bWJlcnMucHVzaChwYXJzZUludCh3b3JkLCAxMCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG51bGwgPT09IHJlc3VsdC55ZWFyKSB7XG4gICAgICByZXN1bHQueWVhciA9IG1vbWVudCgpLnllYXIoKTtcbiAgICB9XG4gICAgaWYgKCEgdGhpcy5pc0xvY2FsZU1vbnRoRmlyc3QpIHtcbiAgICAgIHVudXNlZE51bWJlcnMucmV2ZXJzZSgpO1xuICAgIH1cbiAgICB1bnVzZWROdW1iZXJzLmZvckVhY2goKG4pID0+IHtcbiAgICAgaWYgKG4gPj0gMSAmJiBuIDw9IDEyICYmIG51bGwgPT09IHJlc3VsdC5tb250aCkge1xuICAgICAgIHJlc3VsdC5tb250aCA9IG4gLSAxO1xuICAgICB9IGVsc2Uge1xuICAgICAgIGlmIChuID49IDEgJiYgbiA8PSAzMSAmJiBudWxsID09PSByZXN1bHQuZGF0ZSkge1xuICAgICAgICAgcmVzdWx0LmRhdGUgPSBuO1xuICAgICAgIH1cbiAgICAgfVxuICAgfSk7XG4gICAgaWYgKG51bGwgPT09IHJlc3VsdC5tb250aCkge1xuICAgICAgcmVzdWx0Lm1vbnRoID0gbW9tZW50KCkubW9udGgoKTtcbiAgICB9XG5cbiAgICBpZiAobnVsbCA9PT0gcmVzdWx0LmRhdGUpIHtcbiAgICAgIHJlc3VsdC5kYXRlID0gbW9tZW50KCkuZGF0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG5cbiAgfVxuXG5cblxuICBwYXJzZVRpbWUodGltZVN0cjogc3RyaW5nKTogVGltZVBhcnNlUmVzdWx0IHtcbiAgICBsZXQgcnhSZXN1bHQ7XG4gICAgbGV0IG1lcmlkaWFuOiBzdHJpbmcgPSBudWxsO1xuICAgIGlmICgvYW0vaS50ZXN0KHRpbWVTdHIpKSB7XG4gICAgICBtZXJpZGlhbiA9ICdhbSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgvcG0vaS50ZXN0KHRpbWVTdHIpKSB7XG4gICAgICAgIG1lcmlkaWFuID0gJ3BtJztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcnggPSAvXFxkezEsMn0vZztcbiAgICBjb25zdCByZXN1bHRzID0gW107XG5cbiAgICB3aGlsZSAoKHJ4UmVzdWx0ID0gcnguZXhlYyh0aW1lU3RyKSkgIT09IG51bGwpIHtcbiAgICAgIHJlc3VsdHMucHVzaChyeFJlc3VsdFswXSk7XG4gICAgfVxuICAgIGxldCBob3VyID0gcmVzdWx0c1swXSA/ICBwYXJzZUludChyZXN1bHRzWzBdLCAxMCkgOiAwO1xuICAgIGlmICgncG0nID09PSBtZXJpZGlhbiAmJiBob3VyIDwgMTIpIHtcbiAgICAgIGhvdXIgKz0gMTI7XG4gICAgfVxuICAgIGNvbnN0IG1pbnV0ZSA9IHJlc3VsdHNbMV0gPyAgcGFyc2VJbnQocmVzdWx0c1sxXSwgMTApIDogMDtcbiAgICByZXR1cm4ge1xuICAgICAgaG91cjogaG91cixcbiAgICAgIG1pbnV0ZTogbWludXRlXG4gICAgfTtcbiAgfVxuXG5cblxufVxuIl19