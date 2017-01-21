import { Character } from './../../models/character.model';
import { Observable } from 'rxjs';
import { StartSessionAction, SetupBoardAction, NavToMainMenuAction } from './../../actions/board.action';
import { Store } from '@ngrx/store';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'ggj-loose-page',
  template: `
    <div class="loose-page-container">
      <div class="guessed-wrong">
        You Lost you lives!!! Murderer is free.
      </div>
      <div class="actions">
        <button-input class="restart" (click)="restartSession()">
          Restart
        </button-input>
        <button-input (click)="gotoMainMenu()">
          Main Menu
        </button-input>
      </div>
    </div>
  `,
  styleUrls: ['./loose-page.container.scss']
})
export class LoosePageContainer implements OnInit {
  @HostBinding('style.height') roomHeight: string = '100%';

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    
  }

  restartSession() {
    this.store.dispatch(new SetupBoardAction());
  }

  gotoMainMenu() {
    this.store.dispatch(new NavToMainMenuAction());
  }

}
