import { NavToIntroAction } from './../../actions/main-menu.action';
import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  template: `
    <div class="users-container">
        <div class="sky">
          <svg class="logo" icon="logo"></svg>
          <svg class="wave" icon="wave"></svg>
        </div>
        <div class="sea">
          <button-input (click)="startGame()" [plain]="true">
            <svg class="play" icon="play"></svg>
          </button-input>
          <div class="main-menu">
            <button-input class="credits" i18n (click)="gotoCredits()" [plain]="true">Credits</button-input>
          </div>
        </div>
    </div>
  `,
  styleUrls: ['./main-menu.container.scss']
})
export class MainMenuContainer {
  constructor(
    private store: Store<any>
  ) {}

  ngOnInit() {
    
  }

  startGame() {
    this.store.dispatch(new NavToIntroAction());
  }

  gotoCredits() {
    
  }

}
