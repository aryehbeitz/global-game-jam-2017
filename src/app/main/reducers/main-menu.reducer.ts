import { Action } from '@ngrx/store';
import { MainMenuActionTypes } from '../actions/main-menu.action';
import { AppUser } from '../models/app-user.model';
import { ShellActionTypes } from '../../shell/actions/shell.action';

export interface State {
    users: {
        info: { [key: string]: AppUser},
        list: string[],
        meta: {
            pageSize: number;
        },
        total: number
    }
};

const initialUsers = {
    info: {},
    list: [], 
    meta: {
        pageSize: 5
    }, 
    total: 0 
}

const initialState: State = {
    users: initialUsers
};

export function mainMenuReducer(state: State = initialState, action): State {
    switch (action.type) {
        case MainMenuActionTypes.LOAD_APP_USERS_COMPLETE:
            return Object.assign({}, state, {
                users: {
                    info: Object.assign({}, state.users.info, action.payload.users),
                    list: action.payload.list,
                    meta: Object.assign({}, state.users.meta, { pageSize: action.payload.pageSize }),
                    total: action.payload.total
                }
            });
        case ShellActionTypes.LOGOUT:
            return Object.assign({}, state, {
                users: initialUsers
            });
    }
    return state;
};
