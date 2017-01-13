import { InputValidator } from './../../validators/input-validator';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'pager',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./pager.component.scss'],
    template: `
        <form class="pager-container" [formGroup]="formGroup">
            <button-input [disabled]="!prevActive" (click)="first()">|&lt;</button-input>
            <button-input [disabled]="!prevActive" (click)="prev()">&lt;</button-input>
            <div class="from-page-label" i18n>Page</div>
            <input type="text" formControlName="curPage" [(ngModel)]="currentPage" (change)="setActivePage(currentPage)"/>
            <div class="of-page-label" i18n>of&nbsp;</div>
            <div class="num-of-pages">{{ pages }}</div>
            <button-input [disabled]="!nextActive" (click)="next()">&gt;</button-input>
            <button-input [disabled]="!nextActive" (click)="last()">&gt;|</button-input>
        </form>
    `
})
export class PagerComponent {
    @Input() currentPage: number;
    @Input() set numOfPages(value: number) {
        this.pages = value;
        this.formGroup.controls['curPage'].setValidators(InputValidator.range(1, value));
    }
    @Output() activePage: EventEmitter<number> = new EventEmitter<number>();
    private formGroup: FormGroup;
    private pages: number;

    constructor() {
        this.formGroup = new FormGroup({
            curPage: new FormControl('')
        });
    }

    ngOnInit() { 
    }

    get prevActive() {
        return this.currentPage > 1;
    }

    get nextActive() {
        return this.currentPage < this.pages;
    }

    first() {
        if (this.prevActive) {
            this.setActivePage(1);
        }
    }

    last() {
        if (this.nextActive) {
            this.setActivePage(this.pages);
        }
    }

    prev() {
        if (this.prevActive) {
            this.setActivePage(this.currentPage - 1);
        }
    }

    next() {
        if (this.nextActive) {
            this.setActivePage(this.currentPage + 1);
        }
    }

    setActivePage(page: number) {
        this.activePage.emit(page);
    }
}