import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { animations } from './main-menu.animations';

@Component({
  selector: 'menu-item',
  template: `
    <li class="menu-item" [class.root-item]="isRoot">
      <a class="title-row" (click)="linkClicked($event)" [class.group-item]="isGroupItem"
       [routerLink]="navUrl" [class.active]="activeLink">
        <div class="menu-root-icon" *ngIf="isRoot">
          <svg></svg>
        </div>
        <div class="item-label" [style.padding-left]="leftIndent" [style.width]="itemLabelWidth">
          <div class="item-link">{{ itemConfig.label }}</div>
          <div class="active-sign"></div>
        </div>
      </a>
      <ul *ngIf="isGroupItem" [hidden]="!expanded || menuClosed">
        <menu-item *ngFor="let item of itemConfig.children" [itemConfig]="item" [ancestorsUrl]="itemUrl" [depth]="depth + 1"></menu-item>
      </ul>
    </li>
  `,
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItem {
  @Input() ancestorsUrl: string = '';
  @Input() itemConfig;
  @Input() depth = 0;
  @Input() menuClosed = false;
  itemUrl: string;
  expanded = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.itemUrl = this.ancestorsUrl + '/' + this.itemConfig.url;
    this.expanded = this.activeLink;
  }

  get itemLabelWidth() {
    return this.menuClosed ? '0' : '100%';
  }

  get isRoot() {
    return this.depth === 0;
  }

  get leftIndent() {
    let initialIndentation = this.isRoot ? 0 : 56;
    return (initialIndentation + this.depth * 20) + 'px';
  }

  get navUrl() {
    return this.isGroupItem ? [] : this.itemUrl.split('/');
  }

  get activeLink() {
    return this.router.url.indexOf(this.itemUrl) !== -1;
  }

  get isGroupItem() {
    return this.itemConfig.children;
  }

  linkClicked($event) {
    if (this.isGroupItem || this.activeLink) {
      this.expanded = !this.expanded;
      $event.stopPropagation();
      return false;
    }
  }
}

@Component({
  selector: 'main-menu',
  animations,
  template: `
    <div class="menu-container" [@menuToggle]="menuToggleState">
      <ul>
        <menu-item *ngFor="let item of config" [itemConfig]="item" ancestorsUrl="/protected" [menuClosed]="isMenuClosed"></menu-item>
      </ul>
    </div>
  `,
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  @Input() menuToggleState: string;
  @Input() config: Array<any>;

  get isMenuClosed() {
    return this.menuToggleState === 'thin';
  }
}
