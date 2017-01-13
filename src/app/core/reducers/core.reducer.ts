import { CoreActionTypes, Actions } from './../actions/core.action';
import { User } from './../models/user.model';

export interface State {
  user: User;
};

const initialState: State = {
  user: null
};

export const sharedReducer = (state: State = initialState, action: Actions): State => {
    switch (action.type) {
        case CoreActionTypes.POPULATE_USER:
            return {
                user: action.payload
            };
    }
    return state;
};
