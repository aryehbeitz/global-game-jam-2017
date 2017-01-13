import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'check-input',
    styleUrls: ['./check-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="check-container" [formGroup]="group">
            <input type="checkbox" [formControlName]="controlName" />
            <div class="input-validator" *ngIf="isControlInvalid('password')" i18n>Required</div>
        </div>
    `
})
export class CheckInputComponent implements OnInit {
    @Input() group: FormGroup;
    @Input() controlName: string;
    @Input() type = 'check';
    @Input() placeholder = '';
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