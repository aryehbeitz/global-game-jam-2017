import { StartSessionAction } from './../../actions/board.action';
import { Store } from '@ngrx/store';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'ggj-session-end',
  template: `
    <div class="session-end-container" >
      <button-input (click)="startSession()">
        Start New Session
      </button-input>
    </div>
  `,
  styleUrls: ['./session-end.container.scss']
})
export class SessionEndContainer implements OnInit {
  @HostBinding('style.height') roomHeight: string = '100%';

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
  }

  startSession() {
    this.store.dispatch(new StartSessionAction())
  }

}
