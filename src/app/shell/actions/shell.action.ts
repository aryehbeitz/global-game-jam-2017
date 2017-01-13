import { Action } from '@ngrx/store';

export const ShellActionTypes = {
  TOGGLE_MENU:            '[Shell] Toggle Menu',
  TOGGLE_MENU_COMPLETE:   '[Shell] Toggle Menu Complete',
  LOGOUT:                 '[Shell] Logout'
};

export class ToggleMenuAction implements Action {
  type = ShellActionTypes.TOGGLE_MENU;
}

export class ToggleMenuCompleteAction implements Action {
  type = ShellActionTypes.TOGGLE_MENU_COMPLETE;

  constructor(public payload: { isThinMenu: boolean }) {}
}

export class LogoutAction implements Action {
  type = ShellActionTypes.LOGOUT;
}


export type Actions
  = ToggleMenuAction
  | ToggleMenuCompleteAction
  | LogoutAction;
