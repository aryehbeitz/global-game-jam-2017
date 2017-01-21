import { Settings } from './../models/settings.model';
import { Action } from '@ngrx/store';
import { SystemActionTypes } from '../actions/system.action';
import { LOGIN_STATUS } from '../constants/login-status';
import { ShellActionTypes } from '../../shell/actions/shell.action';
import { System } from '../../core/models/system.model';

export interface State {
    settings: Settings
};

const initialState: State = {
    settings: {
        sessionTime: 20,
        numberOfRooms: 6,
        numberOfCharacters: 10,
        charactersToEndOfGame: 4,
        lives: 3
    }
};

export function systemReducer(state: State = initialState, action): State {
    switch (action.type) {
        case ShellActionTypes.LOGOUT:
            return Object.assign({}, state, {
                system: null
            });
    }
    return state;
};
