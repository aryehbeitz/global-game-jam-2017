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
          <div class="credits">
            <div><span>Developer</span>: Chen Eshchar</div>
            <div><span>Art Director</span>: Alizarin Zroob</div>
            <div><span>Art Director Assistant</span>: Nami Nam</div>
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

}
