import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="header-container">
      <div class="left-pane">
        <div class="toggle-menu" (click)="toggleMenu()">
          <svg icon="alarm"></svg>
        </div>
        <div class="product-name" i18n>Database Security</div>
      </div>
      <div class="right-pane">
        <div class="user-panel">
          <div class="username">{{user.username}}</div>
          <div class="logout" (click)="logoutClicked()">Logout</div>
        </div>
        
      </div>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() user = {username: 'Admin'};
  @Output() menuToggled: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() logout: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  toggleMenu() {
    this.menuToggled.emit();
  }

  logoutClicked() {
    this.logout.emit();
  }

}
