import { Action } from '@ngrx/store';
import { SystemActionTypes } from '../actions/system.action';
import { LOGIN_STATUS } from '../constants/login-status';
import { ShellActionTypes } from '../../shell/actions/shell.action';
import { System } from '../../core/models/system.model';

export interface State {
    system: System
};

const initialState: State = {
    system: null
};

export function systemReducer(state: State = initialState, action): State {
    switch (action.type) {
        case SystemActionTypes.SYSTEM_GET_INFO_COMPLETE:
            return Object.assign({}, state, {
                system: action.payload.system
            });
        case ShellActionTypes.LOGOUT:
            return Object.assign({}, state, {
                system: null
            });
    }
    return state;
};
