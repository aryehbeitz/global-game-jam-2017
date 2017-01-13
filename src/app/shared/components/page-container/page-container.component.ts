import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-container',
  template: `
    <div class="page-container">
        <div class="page-title">{{ pageTitle }}</div>
        <ng-content class="content" select=".page-content"></ng-content>
    </div>
  `,
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent {
  @Input() pageTitle: string;
}
