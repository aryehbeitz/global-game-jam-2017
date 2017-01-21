import { Observable } from 'rxjs/Observable';
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
import { go } from '@ngrx/router-store';

@Injectable()
export class CharacterEffects {
  @Effect()
  changeRoom$: Observable<Action> = this.actions$
    .ofType(BoardActionTypes.START_SESSION)
    .map(action => action.payload)
    .switchMap(_ => {
      return Observable.interval(2000)
        .withLatestFrom(this.store.select('board', 'characters'), this.store.select('board', 'rooms'), (_, characters, rooms) => ({ characters, rooms }))
        .map(combined => {
          const characters: Character[] = combined.characters as Character[],
                rooms: Room[] = combined.rooms as Room[],
                numOfCharacters = characters.length,
                numOfRooms = rooms.length,
                character = characters[Math.floor(Math.random()*numOfCharacters)],
                room = rooms[Math.floor(Math.random()*numOfRooms)]
          return new ChangeRoomAction({
            characterId: character.id,
            targetRoomId: room.id
          })
        })
        .takeUntil(this.actions$.ofType(BoardActionTypes.END_SESSION))
    })

  constructor(
    private actions$: Actions, 
    private store: Store<any>,
    private router: Router
  ) { }
}
