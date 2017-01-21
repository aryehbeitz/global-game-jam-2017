import { Character } from './../../models/character.model';
import { Observable } from 'rxjs';
import { StartSessionAction } from './../../actions/board.action';
import { Store } from '@ngrx/store';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'ggj-session-end',
  template: `
    <div class="session-end-container">
      <div class="sky">
        <div class="murdered-character">
          You've missed the murderer!<br/>
          <div class="info" *ngIf="eliminatedCharacter | async">
            {{ (eliminatedCharacter | async)?.displayName }} has been murdered today</div>
            <svg *ngIf="eliminatedCharacter | async" [icon]="(eliminatedCharacter | async)?.id"></svg>
          <div *ngIf="!(eliminatedCharacter | async)">No one was murdered today</div>
        </div>
        <button-input class="start-session" (click)="startSession()">
          Begin a new day
        </button-input>
      </div>
      <div class="sea">
      </div>
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
