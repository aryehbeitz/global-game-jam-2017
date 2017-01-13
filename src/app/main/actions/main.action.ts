import { Action } from '@ngrx/store';

export const MainActionTypes = {
  DELAYED_NAVIGATION:     '[Main] Delayed Navigation'
};

export class DelayedNavigationAction implements Action {
  type = MainActionTypes.DELAYED_NAVIGATION;

  constructor(public payload: { 
    delay: number,
    navigateTo: Array<any>
  }) {}
}
