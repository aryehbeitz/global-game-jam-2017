import { CharacterService } from './../services/character.service';
import { Character } from './../models/character.model';
import { RoomService } from './../services/room.service';
import { Room } from './../models/room.model';
import { Settings } from '../../core/models/settings.model';
import { BoardActionTypes, SetupBoardCompleteAction, StartSessionAction, EndSessionAction, EliminateCharacterAction } from './../actions/board.action';
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
      let rooms: Room[] = this.room.generateRooms(settings.numberOfRooms),
          characters: Character[] = this.character.generateCharacters(settings.numberOfCharacters, rooms),
          numOfCharacter = characters.length,
          murderer: Character = characters[Math.floor(Math.random()*numOfCharacter)],
          murdererId = murderer.id;
      return new SetupBoardCompleteAction({ rooms, characters, murdererId });
    })

  @Effect()
  startSession$: Observable<Action> = this.actions$
    .ofType(BoardActionTypes.SETUP_BOARD_COMPLETE)
    .map(action => action.payload)
    .map(_ => new StartSessionAction())
    .share()

  @Effect()
  endSession$: Observable<Action> = this.actions$
    .ofType(BoardActionTypes.START_SESSION)
    .map(action => action.payload)
    .delay(10000)
    .map(_ => new EndSessionAction())

  @Effect({ dispatch: false })
  navToSession$: Observable<Action> = this.actions$
    .ofType(BoardActionTypes.START_SESSION)
    .map(action => action.payload)
    .do(_ => this.router.navigate(['/board/rooms']))

  @Effect()
  eliminateCharacter$: Observable<Action> = this.actions$
    .ofType(BoardActionTypes.START_SESSION)
    .map(action => action.payload)
    .withLatestFrom(this.store.select('board'), (_, board) => board)
    .switchMap((board: {characters: Character[], murdererId: string}) => {
      let characters = board.characters,
          murdererId = board.murdererId,
          murderer = characters.find(char => char.id === murdererId);
      return Observable.interval(1000)
        .delay(Math.floor(1000+Math.random()*3000))
        .map(_ => characters.filter(char => (char.roomId === murderer.roomId) && (char.id !== murderer.id)))
        // .filter(userInSameRoom => userInSameRoom.length > 0)
        .map(usersInSameRoom => {
          let eliminatedCharacter: Character;
          if (usersInSameRoom.length) {
            eliminatedCharacter = usersInSameRoom[Math.floor(Math.random()*usersInSameRoom.length)];
            return new EliminateCharacterAction({ eliminatedCharacterId: eliminatedCharacter.id });
          }
          return new EliminateCharacterAction({ eliminatedCharacterId: null })
        })
        .takeUntil(this.actions$.ofType(BoardActionTypes.END_SESSION).merge(this.actions$.ofType(BoardActionTypes.ELIMINATE_CHARACTER)
    .map(action => action.payload)))
    })

  @Effect({ dispatch: false })
  navToSessionEnd$: Observable<Action> = this.actions$
    .ofType(BoardActionTypes.END_SESSION)
    .map(action => action.payload)
    .do(_ => this.router.navigate(['/board/session-end']))

  


  constructor(
    private actions$: Actions, 
    private store: Store<any>,
    private router: Router,
    private room: RoomService,
    private character: CharacterService
  ) { }
}
