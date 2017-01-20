import { Action } from '@ngrx/store';
import { AppUser } from '../models/app-user.model';

export const MainMenuActionTypes = {
  LOAD_APP_USERS_META:            '[MainMenu] Load App Users Meta'
};

export class LoadAppUsersMetaAction implements Action {
  type = MainMenuActionTypes.LOAD_APP_USERS_META;
}
