import { Room } from './../models/room.model';
import { Action } from '@ngrx/store';

export const BoardActionTypes = {
  DELAYED_NAVIGATION:     '[Board] Delayed Navigation',
  SETUP_BOARD:            '[Board] Setup Board',
  SETUP_BOARD_COMPLETE:            '[Board] Setup Board Complete'
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
export class SetupBoardCompleteAction implements Action {
  type = BoardActionTypes.SETUP_BOARD_COMPLETE;

  constructor(public payload: {
    rooms: Room[]
  }) {}
}
