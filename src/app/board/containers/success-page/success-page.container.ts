import { Character } from './../../models/character.model';
import { Observable } from 'rxjs';
import { StartSessionAction, SetupBoardAction, NavToMainMenuAction } from './../../actions/board.action';
import { Store } from '@ngrx/store';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'ggj-success-page',
  template: `
    <div class="success-page-container">
      <div class="sky">
        <div class="guessed-right">
          Yes!! You have guessed the murderer identity.
        </div>
        <div class="actions">
          <button-input class="restart" (click)="resstartSession()">
            Restart
          </button-input>
          <button-input (click)="gotoMainMenu()">
            Main Menu
          </button-input>
        </div>
      </div>
      <div class="sea">
      </div>
    </div>
  `,
  styleUrls: ['./success-page.container.scss']
})
export class SuccessPageContainer implements OnInit {
  @HostBinding('style.height') roomHeight: string = '100%';
  // eliminatedCharacter: Observable<Character>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    // this.eliminatedCharacter = this.store.select('board', 'eliminatedCharacter');
  }

  resstartSession() {
    this.store.dispatch(new SetupBoardAction());
  }

  gotoMainMenu() {
    this.store.dispatch(new NavToMainMenuAction());
  }

}
