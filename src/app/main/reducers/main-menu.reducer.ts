import { Action } from '@ngrx/store';
import { MainMenuActionTypes } from '../actions/main-menu.action';
import { AppUser } from '../models/app-user.model';
import { ShellActionTypes } from '../../shell/actions/shell.action';

export interface State {
    
};

const initialState: State = {
};

export function mainMenuReducer(state: State = initialState, action): State {
    switch (action.type) {
        case MainMenuActionTypes.LOAD_APP_USERS_COMPLETE:
            return Object.assign({}, state, {
                
            });
        case ShellActionTypes.LOGOUT:
            return Object.assign({}, state, {
            });
    }
    return state;
};
