import { ShellActionTypes, Actions } from '../actions/shell.action';

export interface State {
  isThinMenu: boolean;
};

const initialState: State = {
  isThinMenu: false
};

export function shellReducer(state: State = initialState, action): State {
    switch (action.type) {
        case ShellActionTypes.TOGGLE_MENU_COMPLETE:
            return {
                isThinMenu: action.payload.isThinMenu
            };
    }
    return state;
};
