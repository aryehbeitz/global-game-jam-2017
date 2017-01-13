import { Action } from '@ngrx/store';
import { AppUser } from '../models/app-user.model';

export const MainMenuActionTypes = {
  LOAD_APP_USERS_META:            '[MainMenu] Load App Users Meta',
  LOAD_APP_USERS_META_COMPLETE:   '[MainMenu] Load App Users Meta Complete',
  LOAD_APP_USERS_META_FAILED:     '[MainMenu] Load App Users Meta Failed',
  LOAD_APP_USERS:                 '[MainMenu] Load App Users',
  LOAD_APP_USERS_COMPLETE:        '[MainMenu] Load App Users Complete',
  LOAD_APP_USERS_FAILED:          '[MainMenu] Load App Users Failed',
  GO_TO_APP_USERS_QUERY:          '[MainMenu] Go To App Users Query',
  NAV_TO_INTRO:                   '[MainMenu] nAV TO INTRO',
};

export class LoadAppUsersMetaAction implements Action {
  type = MainMenuActionTypes.LOAD_APP_USERS_META;d
}

export class LoadAppUsersMetaCompleteAction implements Action {
  type = MainMenuActionTypes.LOAD_APP_USERS_META_COMPLETE;

  constructor(public payload: { 
    info
  }) {}
}

export class LoadAppUsersMetaFailedAction implements Action {
  type = MainMenuActionTypes.LOAD_APP_USERS_META_FAILED;
}

export class LoadAppUsersAction implements Action {
  type = MainMenuActionTypes.LOAD_APP_USERS;

  constructor(public payload: {
    
  }) {}
}

export class LoadAppUsersCompleteAction implements Action {
  type = MainMenuActionTypes.LOAD_APP_USERS_COMPLETE;

  constructor(public payload: { 
    users: { [key: string]: AppUser },
  }) {}
}

export class LoadAppUsersFailedAction implements Action {
  type = MainMenuActionTypes.LOAD_APP_USERS_FAILED;
}

export class NavToIntroAction implements Action {
  type = MainMenuActionTypes.NAV_TO_INTRO;
}

export class GoToAppUsersQueryAction implements Action {
  type = MainMenuActionTypes.GO_TO_APP_USERS_QUERY;

  constructor(public payload: { 
    
  }) {}
}
