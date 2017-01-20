import { BoardService } from './../services/board.service';
import { Room } from './../models/room.model';
import { Settings } from '../../core/models/settings.model';
import { BoardActionTypes, SetupBoardCompleteAction } from './../actions/board.action';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { go } from '@ngrx/router-store';

@Injectable()
export class BoardEffects {

  @Effect()
  setupBoard$: Observable<Action> = this.actions$
    .ofType(BoardActionTypes.SETUP_BOARD)
    .map(action => action.payload)
    .withLatestFrom(this.store.select('system', 'settings'), (_, settings) => settings)
    .map((settings: Settings) => {
      let rooms: Room[] = this.board.generateRooms(settings.numberOfRooms)
      return new SetupBoardCompleteAction({ rooms });
    })

  constructor(
    private actions$: Actions, 
    private store: Store<any>,
    private router: Router,
    private board: BoardService
  ) { }
}
