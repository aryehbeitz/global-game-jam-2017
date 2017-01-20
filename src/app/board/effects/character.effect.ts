import { BoardActionTypes } from './../actions/board.action';
import { ChangeRoomAction } from './../actions/character.action';
import { CharacterService } from './../services/character.service';
import { Character } from './../models/character.model';
import { RoomService } from './../services/room.service';
import { Room } from './../models/room.model';
import { Settings } from '../../core/models/settings.model';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { go } from '@ngrx/router-store';

@Injectable()
export class CharacterEffects {
  @Effect()
  changeRoom$: Observable<Action> = this.actions$
    .ofType(BoardActionTypes.START_SESSION)
    .map(action => action.payload)
    .delay(2000)
    .withLatestFrom(this.store.select('board', 'rooms'), (_, rooms) => rooms)
    .map(rooms => {

      return new ChangeRoomAction({
        characterId: '',
        targetRoomId: ''
      })
    })

  constructor(
    private actions$: Actions, 
    private store: Store<any>,
    private router: Router
  ) { }
}
