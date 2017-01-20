import { CharacterService } from './../services/character.service';
import { Character } from './../models/character.model';
import { RoomService } from './../services/room.service';
import { Room } from './../models/room.model';
import { Settings } from '../../core/models/settings.model';
import { BoardActionTypes, SetupBoardCompleteAction, StartSessionAction, EndSessionAction } from './../actions/board.action';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { go } from '@ngrx/router-store';

@Injectable()
export class RoomEffects {
  // @Effect()
  // endSession$: Observable<Action> = this.actions$
  //   .ofType(BoardActionTypes.START_SESSION)
  //   .map(action => action.payload)
  //   .delay(10000)
  //   .map(_ => new EndSessionAction())

  constructor(
    private actions$: Actions, 
    private store: Store<any>,
    private router: Router,
    private room: RoomService,
    private character: CharacterService
  ) { }
}
