import { Settings } from './../../../core/models/settings.model';
import { Character } from './../../../board/models/character.model';
import { SetupBoardAction } from './../../../board/actions/board.action';
import { InputValidator } from './../../../controls/validators/input-validator';
import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  template:  `
    <div class="intro-container">
      <div class="intro-info">
        {{ numOfCharacters | async }} characters are in old Jaffa. One of them is a murderer<br/>
        Each day an act of murder is happening, <br/>if a murderer stays in the same room with the victim.<br/>
        Find the criminal within {{ daysToPlay | async }} days<br/>
        Choose wisely, as you only have {{ lives | async }} guessings.
      </div>
      <button-input class="start-btn" (click)="startGame()">
        Start
      </button-input>
    </div>
  `,
  styleUrls: ['./intro.container.scss']
})
export class IntroContainer {
  numOfCharacters: Observable<number>;
  daysToPlay: Observable<number>;
  lives: Observable<number>;

  constructor(
    private store: Store<any>,
  ) {}

  ngOnInit() {
    let settings = this.store.select('system', 'settings');
    this.lives = settings.map((settings: Settings) => settings.lives);
    this.numOfCharacters = settings.map((settings: Settings) => settings.numberOfCharacters);
    this.daysToPlay = settings.map((settings: Settings) => settings.numberOfCharacters - settings.charactersToEndOfGame);
  }

  startGame() {
    this.store.dispatch(new SetupBoardAction());
  }
}
