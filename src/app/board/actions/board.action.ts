import { Character } from './../models/character.model';
import { Room } from './../models/room.model';
import { Action } from '@ngrx/store';

export const BoardActionTypes = {
  DELAYED_NAVIGATION:     '[Board] Delayed Navigation',
  SETUP_BOARD:            '[Board] Setup Board',
  SETUP_BOARD_COMPLETE:   '[Board] Setup Board Complete',
  START_SESSION:          '[Board] Start Session',
  End_SESSION:            '[Board] End Session'
};

export class DelayedNavigationAction implements Action {
  type = BoardActionTypes.DELAYED_NAVIGATION;

  constructor(public payload: { 
    delay: number,
    navigateTo: Array<any>
  }) {}
}

export class SetupBoardAction implements Action {
  type = BoardActionTypes.SETUP_BOARD;
}
export class StartSessionAction implements Action {
  type = BoardActionTypes.START_SESSION;
}
export class EndSessionAction implements Action {
  type = BoardActionTypes.End_SESSION;
}
export class SetupBoardCompleteAction implements Action {
  type = BoardActionTypes.SETUP_BOARD_COMPLETE;

  constructor(public payload: {
    rooms: Room[],
    characters: Character[]
  }) {}
}
