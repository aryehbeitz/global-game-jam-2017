import { ValidatorFn, AbstractControl } from '@angular/forms';

export class InputValidator {
    static range(min: number, max: number): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            const value = control.value;
            return (value >= min && value <= max) ? null : {
                minmax: true
            }
        };
    }
    static confirm(control: AbstractControl): ValidatorFn {
        return (confirmControl: AbstractControl): {[key: string]: any} => {
            const value = control.value,
                  confirmValue = confirmControl.value;
            return (value === confirmValue) ? null : {
                confirm: true
            }
        };
    }
}