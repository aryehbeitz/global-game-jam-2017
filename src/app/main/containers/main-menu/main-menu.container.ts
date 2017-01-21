import { NavToIntroAction } from './../../actions/main-menu.action';
import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  template: `
    <div class="users-container" >
        <div class="main-menu">
            <button-input (click)="startGame()">
                <div class="content">
                    <svg icon="alarm"></svg>
                    <div i18n>Start</div>
                </div>
            </button-input>
            <!--<button-input i18n (click)="startGame()">Settings</button-input>-->
            <button-input i18n (click)="gotoCredits()">Credits</button-input>
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
