import { browser } from 'protractor';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy,
        ContentChild, TemplateRef} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'grid',
    styleUrls: ['./grid.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <form [formGroup]="form">
            <table class="grid-table" cellspacing="0">
                <thead>
                    <tr class="header">
                        <th class="selectables" *ngIf="selectable"></th>
                        <th *ngFor="let col of columns"><a (click)="sortById(col.id)">{{ col.dislpayName }}</a></th>
                    </tr>
                </thead>
                <tbody  class="table-row" *ngFor="let row of rows | async; trackBy: getId">
                    <tr (click)="toggleOpenRow(row.id)" class="row" [class.expandable]="actionable">
                        <td *ngIf="selectable" (click)="rowSelected($event, row.id)">
                            <check-input [controlName]="row.id" [group]="selectables"></check-input>
                        </td>
                        <td *ngFor="let col of columns">{{ row[col.name] }}</td>
                    </tr>
                    <tr *ngIf="actionable && openRows[row.id]">
                       <td *ngIf="selectable"></td>
                       <td [attr.colspan]="columns.length">
                            <template ngFor let-row [ngForOf]="[row]" [ngForTemplate]="rowTmpl"></template>
                       </td>
                    </tr>
                </tbody>
                <tbody *ngIf="!(rows | async).length">
                    <tr>
                        <td *ngIf="selectable"></td>
                        <td [attr.colspan]="columns.length">{{ noRecrodsMsg }}</td>
                    </tr>
                </tbody>
            </table>
        </form>
    `
})
export class GridComponent implements OnInit {
    @Output() sort: EventEmitter<string> = new EventEmitter<string>();
    @Input() columns: Column[] = [];
    @Input() rows: Observable<any>;
    @Input() actionable = false;
    @Input() selectable = false;
    @Input() noRecrodsMsg = '';
    @Input() form: FormGroup = new FormGroup({});
    selectables: FormGroup = new FormGroup({});
    openRows = new Object();
    rowsSubs: Subscription;

     @ContentChild('rowEl') public rowTmpl: TemplateRef<Element>;

     rowSelected($event, id) {
         $event.stopPropagation();
     }

    sortById(id: string) {
        this.sort.emit(id);
    }

    toggleOpenRow(id) {
        this.openRows[id] = !this.openRows[id];
    }

    getId(row) {
        return row.id;
    }

    ngOnInit() {
        this.rowsSubs = this.rows.subscribe(rows => {
            this.openRows = new Object();
            this.selectables.controls = {};
            rows.forEach(row=> {
                this.selectables.addControl(row.id, new FormControl(''));
            });
        });
        this.form.addControl('selectables', this.selectables);

    }

    ngOnDestroy() {
        this.rowsSubs.unsubscribe();
    }
}

export class Column {
    constructor(private id, private displayName) {}
}
