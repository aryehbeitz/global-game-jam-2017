import { Action } from '@ngrx/store';

export const CharacterActionTypes = {
  CHANGE_ROOM:     '[Character] Change Room'
};

export class ChangeRoomAction implements Action {
  type = CharacterActionTypes.CHANGE_ROOM;

  constructor(public payload: { 
    characterId: string,
    targetRoomId: string
  }) {}
}