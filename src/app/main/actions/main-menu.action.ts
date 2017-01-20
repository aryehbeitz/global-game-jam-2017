import { Action } from '@ngrx/store';
import { AppUser } from '../models/app-user.model';

export const MainMenuActionTypes = {
  NAV_TO_INTRO:         '[MainMenu] Nav TO Intro',
};

export class NavToIntroAction implements Action {
  type = MainMenuActionTypes.NAV_TO_INTRO;
}
