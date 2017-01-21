import { Character } from './../models/character.model';
import { Room } from './../models/room.model';
import { Action } from '@ngrx/store';

export const BoardActionTypes = {
  DELAYED_NAVIGATION:     '[Board] Delayed Navigation',
  SETUP_BOARD:            '[Board] Setup Board',
  SETUP_BOARD_COMPLETE:   '[Board] Setup Board Complete',
  START_SESSION:          '[Board] Start Session',
  END_SESSION:            '[Board] End Session',
  ELIMINATE_CHARACTER:    '[Board] Eliminate Character',
  GUESS_MURDERER:         '[Board] Guess Murderer',
  GUESS_SUCCESS:          '[Board] Guess Success',
  GUESS_FAILED:           '[Board] Guess Failed'
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
  type = BoardActionTypes.END_SESSION;
}
export class SetupBoardCompleteAction implements Action {
  type = BoardActionTypes.SETUP_BOARD_COMPLETE;

  constructor(public payload: {
    rooms: Room[],
    characters: Character[],
    murdererId: string
  }) {}
}
export class EliminateCharacterAction implements Action {
  type = BoardActionTypes.ELIMINATE_CHARACTER;

  constructor(public payload: {
    eliminatedCharacterId: string
  }) {}
}
export class GuessMurdererAction implements Action {
  type = BoardActionTypes.GUESS_MURDERER;

  constructor(public payload: {
    guessedId: string
  }) {}
}
export class GuessSuccessAction implements Action {
  type = BoardActionTypes.GUESS_SUCCESS;
}
export class GuessFailedAction implements Action {
  type = BoardActionTypes.GUESS_FAILED;
}
