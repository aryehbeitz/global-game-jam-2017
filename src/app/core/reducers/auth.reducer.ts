import { Action } from '@ngrx/store';
import { AuthActionTypes } from '../actions/auth.action';
import { ShellActionTypes } from '../../shell/actions/shell.action';
import { Auth } from '../../core/models/auth.model';
import { User } from '../../core/models/user.model';
import { LOGIN_STATUS } from '../../core/constants/login-status';

export interface State {
    user: User,
    status: string,
    permissions
};

const initialState: State = {
    user: null,
    status: null,
    permissions: null
};

export function authReducer(state: State = initialState, action): State {
    switch (action.type) {
        case AuthActionTypes.AUTHENTICATE:
            return Object.assign({}, state, {
                status: LOGIN_STATUS.PENDING
            });
        case AuthActionTypes.USER_AUTHENTICATED:
            let payload = action.payload;
            return Object.assign({}, state, {
                status: LOGIN_STATUS.AUTHENTICATED
            });
        case AuthActionTypes.USER_AUTHENTICATION_FAILED:
            return Object.assign({}, state, {
                status: LOGIN_STATUS.FAILED
            });
        case AuthActionTypes.GET_USER_COMPLETE:
            return Object.assign({}, state, {
                user: action.payload.user,
                status: LOGIN_STATUS.AUTHENTICATED
            });
        case AuthActionTypes.GET_USER_FAILED:
            return Object.assign({}, state, {
                status: LOGIN_STATUS.IDLE
            });
        case AuthActionTypes.GET_USER_PERMISSIONS_COMPLETE:
            return Object.assign({}, state, {
                permissions: action.payload.permissions
            });
        case ShellActionTypes.LOGOUT:
            return Object.assign({}, state, {
                status: LOGIN_STATUS.IDLE,
                user: null,
                permissions: null
            });
    }
    return state;
};
