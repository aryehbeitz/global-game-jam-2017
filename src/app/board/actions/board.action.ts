import { Action } from '@ngrx/store';

export const BoardActionTypes = {
  DELAYED_NAVIGATION:     '[Board] Delayed Navigation',
  SETUP_BOARD:            '[Board] Setup Board'
};

export class DelayedNavigationAction implements Action {
  type = BoardActionTypes.DELAYED_NAVIGATION;

  constructor(public payload: { 
    delay: number,
    navigateTo: Array<any>
  }) {}
}

export class BoardAction implements Action {
  type = BoardActionTypes.SETUP_BOARD;

  constructor(public payload: { 
    
  }) {}
}
