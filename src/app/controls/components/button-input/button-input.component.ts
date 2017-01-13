import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'button-input',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./button-input.component.scss'],
    template: `
        <button [type]="type" [disabled]="disabled" i18n [class.plain]="plain">
            <ng-content></ng-content>
        </button>
    `
})
export class ButtonInputComponent {
    @Input() type = 'button';
    @Input() disabled = false;
    @Input() plain = false;

    ngOnInit() { 

    }
}