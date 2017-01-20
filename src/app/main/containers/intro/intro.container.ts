import { SetupBoardAction } from './../../../board/actions/board.action';
import { InputValidator } from './../../../controls/validators/input-validator';
import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  template:  `
    <div class="intro-container">
      <button-input (click)="startGame()">
        <svg icon="alarm"></svg>
      </button-input>
    </div>
  `,
  styleUrls: ['./intro.container.scss']
})
export class IntroContainer {
  constructor(
    private store: Store<any>,
  ) {}

  ngOnInit() {
     
  }

  startGame() {
    this.store.dispatch(new SetupBoardAction());
  }
}
