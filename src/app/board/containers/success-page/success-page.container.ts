import { Character } from './../../models/character.model';
import { Observable } from 'rxjs';
import { StartSessionAction } from './../../actions/board.action';
import { Store } from '@ngrx/store';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'ggj-success-page',
  template: `
    <div class="success-page-container">
      <div class="guessed-right">
        Greate Success!!! You have guessed the murderer identity!
      </div>
      <button-input (click)="startSession()">
        Restart
      </button-input>
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

  startSession() {
    // this.store.dispatch(new StartSessionAction())
  }

}
