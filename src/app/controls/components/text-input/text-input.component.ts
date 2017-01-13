import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'text-input',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./text-input.component.scss'],
    template: `
        <div class="input-container" [formGroup]="group">
            <input class="form-input" [formControlName]="controlName" [type]="type" [placeholder]="placeholder" [ngModel]="value" />
            <div class="input-validator" *ngIf="isControlInvalid('password')" i18n>Required</div>
        </div>
    `
})
export class TextInputComponent implements OnInit {
    @Input() group: FormGroup;
    @Input() controlName: string;
    @Input() type = 'text';
    @Input() placeholder = '';
    @Input() invalidText = null;
    @Input() value;
    @Input() set disable(condition: boolean) {
        if (condition) {
            this.control.disable();
        } {
            this.control.enable();
        }
    }

    ngOnInit() { 

    }

    get control() {
        return this.group.controls[this.controlName];
    }

    isControlInvalid(controlName) {
        return this.control.dirty && this.control.invalid;
    }

}