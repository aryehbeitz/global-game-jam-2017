import { Character } from './../../models/character.model';
import { Observable } from 'rxjs';
import { StartSessionAction } from './../../actions/board.action';
import { Store } from '@ngrx/store';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'ggj-session-end',
  template: `
    <div class="session-end-container">
      <div class="murdered-character">
        <div *ngIf="eliminatedCharacter | async">{{ (eliminatedCharacter | async)?.id }} has been murdered</div>
        <div *ngIf="!(eliminatedCharacter | async)">No one was murdered</div>
      </div>
      <button-input (click)="startSession()">
        Begin a new day
      </button-input>
    </div>
  `,
  styleUrls: ['./session-end.container.scss']
})
export class SessionEndContainer implements OnInit {
  @HostBinding('style.height') roomHeight: string = '100%';
  eliminatedCharacter: Observable<Character>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.eliminatedCharacter = this.store.select('board', 'eliminatedCharacter');
  }

  startSession() {
    this.store.dispatch(new StartSessionAction())
  }

}
